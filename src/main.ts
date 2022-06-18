#!/usr/bin/env node
import open from "open";
import { GoogleUrlBuilder } from "./google-url-builder";
import { parseArgv } from "./parse-argv";

async function main(argv: string[]) {
  const parsed = await parseArgv(argv);
  const url = GoogleUrlBuilder.start()
    .keywords(parsed.keywords)
    .filetype(parsed.filetype)
    .site(parsed.site)
    .map(parsed.map)
    .preset(parsed.preset)
    .build();
  await open(url);
}

main(process.argv.slice(2));
