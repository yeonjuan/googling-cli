# googling-cli

Open the Google search results page in the browser from your terminal.

1. [Installation](#installation)
1. [Usage](#usage)
1. [Options](#options)
   1. [-f, --filetype](#-f---filetype)
   1. [-s, --site](#-s---site)
   1. [-m, --map](#-m---map)
   1. [-h, --help](#-h---help)
1. [License](#license)

## Installation

```sh
npm install -g googling-cli
```

## Usage

```sh
gg             # open google.com on the browser
gg <keywords>  # open the search results page of the <keywords>
```

## Options

### `-f`, `--filetype`

Restrict search result to the given file type (ex: pdf, docx...)

```sh
gg <keywords> --filetype <filetype>
```

### `-s`, `--site`

Search keywords within a certain domain.

```sh
gg <keywords> --site <domain>
```

Their are presets for some domain.

```sh
gg <keywords> --youtube
gg <keywords> --github
gg <keywords> --notion
gg <keywords> --stack
```

### `-m`, `--map`

```sh
gg <keywords> --map
```

### `-h`, `--help`

Show manual.

```sh
gg --help
```

## License

- [MIT](./LICENSE.md)
