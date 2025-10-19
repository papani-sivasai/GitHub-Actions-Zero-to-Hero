import express from "express";
import dotenv from "dotenv";
import { getWeather } from "./weatherService.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const weather = await getWeather(city);
    res.json(weather);
  } catch (error) {
    console.error("❌ Error fetching weather:", error.message);
    res.status(500).json({ error: error.message || "Failed to fetch weather data" });
  }
});


app.listen(port, () => console.log(`🌍 Server running at http://localhost:${port}`));
