import commander from 'commander';
import {version} from '../package.json';

export default function(argv) {
  const result = commander
    .version(version)
    .command('confirm', 'Ask the user Yes/No')
    .parse(argv);

  // No arguments: (only ['node', '/path/to/this/cli.js'])
  if (argv.length === 2) {
    result.outputHelp();
    process.exit(0);
  }
}
