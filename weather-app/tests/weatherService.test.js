// tests/weatherService.test.js
import { jest } from "@jest/globals";

// 1️⃣ Mock axios dynamically
const mockGet = jest.fn();
jest.unstable_mockModule("axios", () => ({
  default: { get: mockGet },
}));

// 2️⃣ Import getWeather AFTER mocking axios
const { getWeather } = await import("../src/weatherService.js");

describe("getWeather", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.WEATHER_API_KEY = "test-api-key"; // ✅ set fake key before each test
  });

  it("returns formatted weather data for a valid city", async () => {
    // Mock API response
    mockGet.mockResolvedValueOnce({
      data: {
        name: "London",
        weather: [{ main: "Clouds", description: "scattered clouds", icon: "03d" }],
        main: { temp: 12.5, feels_like: 11.7, temp_min: 11.1, temp_max: 13.0 },
        wind: { speed: 3.5 },
      },
    });

    const result = await getWeather("London");

    expect(result).toEqual({
      city: "London",
      weather: {
        main: "Clouds",
        description: "scattered clouds",
        icon: "03d",
      },
      temperature: {
        current: 12.5,
        feels_like: 11.7,
        min: 11.1,
        max: 13.0,
      },
      wind: { speed: 3.5 },
    });
  });

  it("throws an error if API key is missing", async () => {
    delete process.env.WEATHER_API_KEY; // ✅ simulate missing key
    await expect(getWeather("London")).rejects.toThrow("Missing WEATHER_API_KEY");
  });
});
