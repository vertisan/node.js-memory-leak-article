interface CacheEntry {
  key: string;
  value: unknown;
}

export class CacheManager {
  private cachePool: CacheEntry[];
  private readonly cachePoolSize: number;

  constructor(cachePoolSize: number = 50) {
    this.cachePool = [];
    this.cachePoolSize = cachePoolSize;
  }

  get(key: string) {
    if (this.has(key)) {
      return this.cachePool.find((x) => x.key === key)?.value;
    }

    return null;
  }

  put(key: string, value: unknown) {
    if (this.cachePool.length > this.cachePoolSize) {
      this.cachePool.splice(0, this.cachePool.length - this.cachePoolSize);
    }

    if (this.has(key)) {
      this.cachePool = this.cachePool.filter((item) => item.key !== key);
    }

    this.cachePool.push({ key, value });
  }

  has(key: string) {
    return this.cachePool.find((x) => x.key === key) !== undefined;
  }
}
