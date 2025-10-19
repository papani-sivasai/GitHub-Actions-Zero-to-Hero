# 🌦️ WeatherApp — Node.js + Express + OpenWeather API

> A beautiful, full-stack **Weather App** built with **Node.js**, **Express**, and the **OpenWeather API**.
>
> Users can search any city to get real-time weather updates, including temperature, conditions, wind speed, and more — with a sleek, responsive UI.

This project is part of the **GitHub Actions Series on Hashnode**, showcasing how to build and automate real-world Node.js applications using CI/CD pipelines.

> **Article Reference:**
> [Building a CI Pipeline for Node.js Applications — GitHub Actions Series, Part 4](#)

---

## Features

1. Real-time weather data from **OpenWeatherMap API**
2. Search any city worldwide
3. Displays:

    * Temperature (current, feels-like, min, max)
    * Weather condition and description
    * Wind speed

4. Responsive & elegant UI (Glassmorphism design)
5. Environment variable-based API key management
6. CI-ready with **linting**, **testing**, and **artifact uploads**

---

## Tech Stack

| Category               | Tools                                 |
| ---------------------- | ------------------------------------- |
| **Frontend**           | HTML, CSS (Glassmorphism), Vanilla JS |
| **Backend**            | Node.js, Express                      |
| **API**                | OpenWeatherMap REST API               |
| **Testing**            | Jest                                  |
| **Linting**            | ESLint                                |
| **Automation (CI/CD)** | GitHub Actions                        |
| **Env Management**     | dotenv                                |

---

## Project Structure

```bash
weather-app/
├── public/
│   ├── index.html        # Frontend UI
│   ├── styles.css        # Styling (Glassmorphism)
│   └── script.js         # Fetches weather data from backend
├── src/
│   ├── server.js         # Express server entry point
│   └── weatherService.js # Fetches data from OpenWeather API
├── .env                  # Template for API key
├── package.json
├── README.md
└── .github/
    └── workflows/
        └── ci.yml        # GitHub Actions CI pipeline
```

---

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/papani-sivasai/GitHub-Actions-Zero-to-Hero.git
cd GitHub-Actions-Zero-to-Hero/weather-app
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

add `.env` file in the root folder and add your OpenWeather API key.

```bash
WEATHER_API_KEY=your_openweather_api_key_here
```

Get your free API key here - [OpenWeatherMap API Keys](https://home.openweathermap.org/api_keys)

### Run the App Locally

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000)

---

## Usage

Enter any city name (e.g. `London`, `New York`, `Luton`) to view live weather data:

* 🌡️ Temperature
* 🌬️ Wind speed
* ☁️ Condition description
* 🧊 Feels-like & range

---

## Testing

Run Jest tests for the API logic (mocked responses):

```bash
npm test
```

---

## GitHub Actions CI Pipeline

Your project includes a preconfigured CI workflow at `.github/workflows/ci.yml`.

### What It Does

* Installs dependencies
* Runs **ESLint** for code quality
* Runs **Jest** tests
* Uploads coverage reports as artifacts

### Example Workflow

```yaml
name: Weather App CI

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  build-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm

      - run: npm ci
      - run: npm run lint

      - env:
          WEATHER_API_KEY: ${{ secrets.WEATHER_API_KEY }}
        run: npm test

      - uses: actions/upload-artifact@v4
        with:
          name: coverage-report
          path: coverage/
```

---


