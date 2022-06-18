import { GoogleUrlBuilder } from "./google-url-builder";

describe("GoogleURLBuilder", () => {
  it("single keyword", () => {
    const url = GoogleUrlBuilder.start().keywords(["value"]).build();
    expect(url).toBe("https://www.google.com/search?q=value");
  });

  it("multiple keywords", () => {
    const url = GoogleUrlBuilder.start()
      .keywords(["value1", "value2", "value3"])
      .build();
    expect(url).toBe("https://www.google.com/search?q=value1+value2+value3");
  });

  it("keyword with filetype: pdf", () => {
    const url = GoogleUrlBuilder.start()
      .keywords(["value1"])
      .filetype("pdf")
      .build();
    expect(url).toBe("https://www.google.com/search?q=value1+filetype:pdf");
  });

  it("keyword with site: youtube", () => {
    const url = GoogleUrlBuilder.start()
      .keywords(["value1"])
      .site("youtube")
      .build();
    expect(url).toBe("https://www.google.com/search?q=value1+site:youtube");
  });
});
