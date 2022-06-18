#!/usr/bin/env node
import open from "open";
import { GoogleUrlBuilder } from "./google-url-builder";
import { initCliArgs } from "./cli-args";

async function main(argv: string[]) {
  const args = await initCliArgs(argv);

  const url = GoogleUrlBuilder.start()
    .keywords(args.keywords)
    .filetype(args.filetype)
    .site(args.site)
    .map(args.map)
    .preset(args.preset)
    .build();

  await open(url);
}

main(process.argv.slice(2));
