# inquest

Implements a simple `inquest` script exposing some
of [inquirer](https://github.com/sboudrias/Inquirer.js)'s power to
shell scripts.

## Commands

### --help

```
$ inquest --help

  Usage: inquest [options] [command]


  Commands:

    confirm     Ask the user Yes/No
    fuzzy       Ask the user to select a value, autocompleted with fuzzy matching
    help [cmd]  display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

### confirm

```
$ inquest confirm

  Usage: inquest-confirm [options] <messsage...>

  Prints the given message and asks the user to confirm (yes) or
  abort (no). Exits with status 0 if yes is chosen; else 1.

  To protect especially sensitive operations, you can specify
  --key=somePhrase to require the user to enter exactly somePhrase.

  Options:

    -h, --help      output usage information
    -V, --version   output the version number
    -k --key <key>  Specific phrase instead of 'yes'

```

![confirm demo](docs/inquest-confirm-demo.gif?raw=true)

### fuzzy

```
$ inquest fuzzy

  Usage: inquest-fuzzy [options] <message> <options...>

  Displays the given message and allows the user to select from the
  specified options with fuzzy-matching autocomplete. The selected
  value is printed to the specified output file. Exits with status
  0 if a value is chosen; else 1 (eg, user aborts with Ctrl-C).

  Options:

    -h, --help                    output usage information
    -V, --version                 output the version number
    -o, --out-file <output file>  File to print selected value too

```

![fuzzy demo](docs/inquest-fuzzy-demo.gif?raw=true)

## License

Released under the MIT License. See the LICENSE file for full text

Copyright © 2017 George Pittarelli
