#!/usr/bin/env bash

INQUEST=./packages/inquest/bin/inquest

cat <<'EOF'
# inquest

Implements a simple `inquest` script exposing some
of [inquirer](https://github.com/sboudrias/Inquirer.js)'s power to
shell scripts.

## Commands

### `--help`
EOF

$INQUEST

cat <<'EOF'

### confirm

EOF

$INQUEST confirm

cat <<'EOF'

### fuzzy

EOF

$INQUEST fuzzy

cat <<'EOF'

## License

Released under the MIT License. See the LICENSE file for full text

Copyright © 2017 George Pittarelli
EOF
