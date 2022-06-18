type SitePreset = "stack" | "github" | "youtube" | "notion";

export class GoogleUrlBuilder {
  private _keywords?: string[];
  private _filetype?: string;
  private _site?: string;
  private _map?: boolean;
  private _preset?: SitePreset;
  private _queries: string[] = [];

  public static start() {
    return new GoogleUrlBuilder();
  }

  private getDomain(preset: SitePreset) {
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

  pushQuery(...value: string[]): void;
  pushQuery(value: string, key?: string) {
    if (Array.isArray(value)) {
      value.forEach((v) => this.pushQuery(v));
      return;
    }
    let qv = "";
    if (key !== undefined) {
      qv = `${key}:`;
    }
    qv += value;
    this._queries.push(qv);
  }

  get queries() {
    return this._queries.join("+");
  }

  build() {
    const url = "https://www.google.com/search";

    this._keywords && this.pushQuery(...this._keywords);

    if (this._preset) {
      this.pushQuery(this.getDomain(this._preset), "site");
      return `${url}?q=${this.queries}`;
    }

    if (this._map) {
      return `${url}?q=map:${this.queries}`;
    }

    this._filetype && this.pushQuery(this._filetype, "filetype");
    this._site && this.pushQuery(this._site, "site");

    return `${url}?q=${this.queries}`;
  }
}
