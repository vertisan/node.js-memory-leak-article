export class CacheManager {
  private readonly cachePool: Record<string, unknown>;

  constructor() {
    this.cachePool = {};
  }

  get(key: string) {
    if (this.has(key)) {
      return this.cachePool[key];
    }

    return null;
  }

  put(key: string, value: unknown) {
    this.cachePool[key] = value;
  }

  has(key: string) {
    return key in this.cachePool;
  }
}
