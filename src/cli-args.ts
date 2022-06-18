import yargs from "yargs";
import packageJSON from "../package.json";

export class CliArgs {
  public static async create(args: string[]) {
    const argv = await yargs(args)
      .usage("Usage: $0  <keywords>")
      .option("help", {
        alias: "h",
        type: "boolean",
        description: "Show help",
      })
      .version("version", "Show version", packageJSON.version)
      .alias("version", "v").argv;
    return new CliArgs(argv);
  }

  private constructor(private argv: Awaited<typeof yargs["argv"]>) {}

  keywords(): string[] {
    return (this.argv["_"] || []).map((keyword) => `${keyword}`.trim());
  }
}
