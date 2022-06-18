export class GoogleUrlBuilder {
  private static URL = "https://www.google.com/search";

  private dataMap: Map<string, string> = new Map();

  public static start() {
    return new GoogleUrlBuilder();
  }

  private constructor() {}

  private setIfExists(key: string, value?: string) {
    if (value !== undefined) {
      this.dataMap.set(key, value);
    }
  }

  keywords(keywords?: string[]) {
    this.setIfExists("q", keywords?.join("+"));
    return this;
  }

  build() {
    const queries: string[] = [];
    this.dataMap.forEach((value, key) => {
      queries.push(`${key}=${value}`);
    });
    return `${GoogleUrlBuilder.URL}?${queries.join()}`;
  }
}
