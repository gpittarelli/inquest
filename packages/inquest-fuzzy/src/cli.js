import fs from 'fs';
import commander from 'commander';
import inquirer from 'inquirer';
import autocomplete from 'inquirer-autocomplete-prompt';
import fuzzy from 'fuzzy';
import {version} from '../package.json';

inquirer.registerPrompt('autocomplete', autocomplete);

// Usage: node _deploy_question [output-file]
export async function fuzzyAutocomplete(message, options) {
  const {choice} = await inquirer.prompt([{
    type: 'autocomplete',
    name: 'choice',
    message,
    source: (soFar, input) => Promise.resolve(
      input === null ? options :
        (fuzzy.filter(input, options) || []).map((x) => x.string)
    ),
    choices: []
  }]);

  return choice;
}

export default async function(argv) {
  // exit with code 1 on Ctrl-c
  let statusCode = 1;
  process.once('exit', () => process.exit(statusCode));

  const command = commander
    .version(version)
    .description(
  `Displays the given message and allows the user to select from the
  specified options with fuzzy-matching autocomplete. The selected
  value is printed to the specified output file.`)
    .arguments('<message> <options...>')
    .option('-o, --out-file <output file>', 'File to print selected value too')
    .action(async (message, options, {outFile}) => {
      const choice = await fuzzyAutocomplete(message, options);
      if (outFile) {
        fs.writeFileSync(outFile, choice + '\n');
      }
      if (choice) {
        statusCode = 0;
      }
    })
    .parse(argv);

  // No arguments: (eg only ['node', '/path/to/this/cli.js'])
  if (argv.length === 2) {
    command.outputHelp();
    process.exit(0);
  }
}
