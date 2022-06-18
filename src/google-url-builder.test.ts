import { GoogleUrlBuilder } from "./google-url-builder";

describe("GoogleURLBuilder", () => {
  it("single word", () => {
    const url = GoogleUrlBuilder.start().keywords(["value"]).build();
    expect(url).toBe("https://www.google.com/search?q=value");
  });

  it("multiple words", () => {
    const url = GoogleUrlBuilder.start()
      .keywords(["value1", "value2", "value3"])
      .build();
    expect(url).toBe("https://www.google.com/search?q=value1+value2+value3");
  });
});
