import commander from 'commander';
import {version} from '../package.json';

export default function(argv) {
  const result = commander
    .version(version)
    .command('confirm', 'Ask the user Yes/No')
    .command('checkbox', 'Ask the user to select multiple values')
    .command(
      'fuzzy',
      'Ask the user to select a value, autocompleted with fuzzy matching'
    )
    .parse(argv);

  // No arguments: (only ['node', '/path/to/this/cli.js'])
  if (argv.length === 2) {
    result.outputHelp();
    process.exit(0);
  }
}
