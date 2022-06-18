#!/usr/bin/env node
import open from "open";
import { GoogleUrlBuilder } from "./google-url-builder";
import { CliArgs } from "./cli-args";

async function main(argv: string[]) {
  const args = await CliArgs.create(argv);

  const keywords = args.keywords();

  const url = GoogleUrlBuilder.start().keywords(keywords).build();
  await open(url);
}

main(process.argv.slice(2));
