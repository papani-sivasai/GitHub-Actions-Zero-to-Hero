import axios from "axios";

export async function getWeather(city) {
  const apiKey = process.env.WEATHER_API_KEY;
  if (!apiKey) throw new Error("Missing WEATHER_API_KEY in environment variables");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  const response = await axios.get(url);
  const data = response.data;

  return {
    city: data.name,
    weather: {
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon
    },
    temperature: {
      current: data.main.temp,
      feels_like: data.main.feels_like,
      min: data.main.temp_min,
      max: data.main.temp_max
    },
    wind: {
      speed: data.wind.speed
    }
  };
}
