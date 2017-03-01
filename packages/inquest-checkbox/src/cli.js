import fs from 'fs';
import commander from 'commander';
import inquirer from 'inquirer';
import {version} from '../package.json';

export async function checkboxes(message, choices) {
  const {selections} = await inquirer.prompt([{
    type: 'checkbox',
    name: 'selections',
    message,
    choices
  }]);
  return selections;
}

export default async function(argv) {
  // Handle Ctrl-c to default to 'No'
  let statusCode = 1;
  process.once('exit', () => process.exit(statusCode));

  const command = commander
    .version(version)
    .description('Asks the user to select 0 or more of the supplied values.')
    .arguments('<messsage> <options...>')
    .option('-o, --out-file <output file>', 'File to print selected values too')
    .action(async (message, options, {outFile}) => {
      const choices = await checkboxes(message, options);
      if (outFile) {
        fs.writeFileSync(outFile, choices.join('\n') + '\n');
      }
      if (choices.length > 0) {
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
