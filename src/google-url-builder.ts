type SitePreset = "stack" | "github" | "youtube" | "notion";

export class GoogleUrlBuilder {
  private static URL = "https://www.google.com/search";
  private _keywords?: string[];
  private _filetype?: string;
  private _site?: string;
  private _map?: boolean;
  private _preset?: SitePreset;

  public static start() {
    return new GoogleUrlBuilder();
  }

  private static getDomain(preset: SitePreset) {
    switch (preset) {
      case "stack":
        return "stackoverflow.com";
      case "github":
        return "github.com";
      case "youtube":
        return "youtube.com";
      case "notion":
        return "notion.so";
    }
  }

  private constructor() {}

  keywords(keywords?: string[]) {
    this._keywords = keywords;
    return this;
  }

  filetype(filetype?: string) {
    this._filetype = filetype;
    return this;
  }

  site(site?: string) {
    this._site = site;
    return this;
  }

  map(map?: boolean) {
    this._map = map;
    return this;
  }

  preset(preset?: SitePreset) {
    this._preset = preset;
    return this;
  }

  build() {
    const queries: string[] = [];
    this._keywords && queries.push(...this._keywords);

    if (this._preset) {
      queries.push(`site:${GoogleUrlBuilder.getDomain(this._preset)}`);
      return `${GoogleUrlBuilder.URL}?q=${queries.join("+")}`;
    }

    if (this._map) {
      return `${GoogleUrlBuilder.URL}?q=map:${queries.join("+")}`;
    }

    this._filetype && queries.push(`filetype:${this._filetype}`);
    this._site && queries.push(`site:${this._site}`);
    return `${GoogleUrlBuilder.URL}?q=${queries.join("+")}`;
  }
}
