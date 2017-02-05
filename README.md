# inquest

Implements a simple `inquest` script exposing some
of [inquirer](https://github.com/sboudrias/Inquirer.js)'s power to
shell scripts.

## Commands

### `--help`

  Usage: inquest [options] [command]


  Commands:

    confirm     Ask the user Yes/No
    fuzzy       Ask the user to select a value, autocompleted with fuzzy matching
    help [cmd]  display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number


### confirm


  Usage: inquest-confirm [options] <messsage...>

  Prints the given message and asks the user to confirm (yes) or
  abort (no)

  Options:

    -h, --help     output usage information
    -V, --version  output the version number


### fuzzy


  Usage: inquest-fuzzy [options] <message> <options...>

  Displays the given message and allows the user to select from the
  specified options with fuzzy-matching autocomplete. The selected
  value is printed to the specified output file.

  Options:

    -h, --help                    output usage information
    -V, --version                 output the version number
    -o, --out-file <output file>  File to print selected value too


## License

Released under the MIT License. See the LICENSE file for full text

Copyright © 2017 George Pittarelli
