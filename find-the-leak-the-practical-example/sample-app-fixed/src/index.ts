import express from "express";
import * as fs from "fs";
import { Weather } from "./weather/Weather";

const app = express();
const port = parseInt(process.env.APP_PORT || "3000");

const filename = `./requests_${Date.now()}.json`;
const logsFile = fs.createWriteStream(filename, { flags: "a" });
const writeLog = (req: string) => {
  logsFile.write(`${req}\r\n`);
};

app.use((req, res, next) => {
  writeLog(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const weather = new Weather();
app.get("/weather", async (req, res) => {
  const latitude = req.query?.latitude;
  const longitude = req.query?.longitude;

  if (!latitude || !longitude) {
    res.status(400);
    res.send(`Longitude and Latitude cannot be empty!`);
    return;
  }

  try {
    const data = await weather.getWeather(latitude.toString(), longitude.toString());
    res.send(data);
  } catch (err) {
    const error = err as Error;
    res.status(500).send({ status: 500, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
