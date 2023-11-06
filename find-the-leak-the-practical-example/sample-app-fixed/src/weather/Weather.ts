import { CacheManager } from "../cache/CacheManager";

export class Weather {
  private readonly cache: CacheManager;

  constructor() {
    this.cache = new CacheManager();
  }

  async getWeather(latitude: string, longitude: string) {
    const cacheKey = `${latitude}:${longitude}`;
    let data = this.cache.get(cacheKey);
    if (data === null) {
      data = await this.getCurrentWeather(latitude, longitude);
      this.cache.put(cacheKey, data);
    }

    return data;
  }

  async getCurrentWeather(latitude: string, longitude: string) {
    // Imagine connecting here to an external API that provides up-to-date weather information!

    return {
      latitude: latitude,
      longitude: longitude,
      timezone: "GMT",
      timezone_abbreviation: "GMT",
      elevation: 249.0,
      current_weather: {
        temperature: this.randomFloat(-20, 10),
        windspeed: 10.1,
        winddirection: 358.0,
        weathercode: 73,
        time: new Date().toISOString(),
      },
    };
  }

  private randomFloat(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.random() * (max - min + 1) + min;
  }
}
