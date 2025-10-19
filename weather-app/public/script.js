const form = document.getElementById("weather-form");
const input = document.getElementById("city-input");
const resultCard = document.getElementById("weather-result");

const cityName = document.getElementById("city-name");
const temp = document.getElementById("temperature");
const feelsLike = document.getElementById("feels-like");
const tempRange = document.getElementById("temp-range");
const condition = document.getElementById("condition");
const wind = document.getElementById("wind");
const icon = document.getElementById("weather-icon");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = input.value.trim();
  if (!city) return;

  try {
    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
    const data = await res.json();

    if (data.error) {
      cityName.textContent = "❌ " + data.error;
      resultCard.classList.remove("hidden");
      return;
    }

    cityName.textContent = data.city;
    temp.innerHTML = `🌡️ ${data.temperature.current.toFixed(1)}°C`;
    feelsLike.textContent = `Feels like: ${data.temperature.feels_like.toFixed(1)}°C`;
    tempRange.textContent = `Min: ${data.temperature.min.toFixed(1)}°C | Max: ${data.temperature.max.toFixed(1)}°C`;

    condition.textContent = `${data.weather.main} — ${data.weather.description}`;
    wind.textContent = `💨 Wind: ${data.wind.speed.toFixed(1)} m/s`;

    icon.src = `https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`;
    icon.alt = data.weather.description;

    resultCard.classList.remove("hidden");
  } catch (err) {
    alert("⚠️ Unable to fetch weather data. Please try again later.");
  }

  input.value = "";
});
