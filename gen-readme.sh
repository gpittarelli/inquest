#!/usr/bin/env bash

INQUEST=./packages/inquest/bin/inquest

function document() {
  echo '### `'$1'`'
  echo ''
  echo '```'
  echo '$ inquest '$1
  $INQUEST $1
  echo '```'
}

cat <<'EOF'
# inquest

Implements a simple `inquest` script exposing some
of [inquirer](https://github.com/sboudrias/Inquirer.js)'s power to
shell scripts.

## Commands

EOF

document --help
document confirm
document fuzzy

cat <<'EOF'

## License

Released under the MIT License. See the LICENSE file for full text

Copyright © 2017 George Pittarelli
EOF
