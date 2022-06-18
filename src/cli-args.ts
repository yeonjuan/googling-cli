import yargs from "yargs";
import packageJSON from "../package.json";

const OPTIONS = {
  help: {
    alias: "h",
    type: "boolean",
    description: "Show help",
  },
  filetype: {
    alias: "f",
    type: "string",
    description: "Restrict search to given file type (ex: pdf, docx...)",
  },
  site: {
    alias: "s",
    type: "string",
    description:
      "Search within a given website or web domain (ex: stackoverflow.com)",
  },
  map: {
    alias: "m",
    type: "boolean",
    description: "Search a map of a location.",
  },
  stack: {
    type: "boolean",
    description: "Search within stackoverflow.com",
  },
  youtube: {
    type: "boolean",
    description: "Search within youtube.com",
  },
  notion: {
    type: "boolean",
    description: "Search within notion.so",
  },
  github: {
    type: "boolean",
    description: "Search within github.com",
  },
} as const;

export async function initCliArgs(args: string[]) {
  const parsed = await yargs(args)
    .usage("Usage: $0 <keywords> [options]")
    .options(OPTIONS)
    .version("version", "Show version", packageJSON.version)
    .alias("version", "v").argv;

  const preset = parsed.stack
    ? "stack"
    : parsed.youtube
    ? "youtube"
    : parsed.notion
    ? "notion"
    : parsed.github
    ? "github"
    : undefined;

  return {
    ...parsed,
    keywords: parsed._.map((v) => String(v)),
    preset,
  } as const;
}
