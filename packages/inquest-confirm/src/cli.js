import commander from 'commander';
import inquirer from 'inquirer';
import {version} from '../package.json';

export async function confirm(message) {
  const {confirm} = await inquirer.prompt([{
    type: 'expand',
    name: 'confirm',
    message,
    choices: [
      {key: 'y', name: 'Yes', value: true},
      {key: 'n', name: 'No',  value: false}
    ]
  }]);

  return !!confirm;
}

export default async function(argv) {
  // Handle Ctrl-c to default to 'No'
  let statusCode = 1;
  process.once('exit', () => process.exit(statusCode));

  const command = commander
    .version(version)
    .description(
 `Prints the given message and asks the user to confirm (yes) or
  abort (no)`)
    .arguments('<messsage...>')
    .action(async (message) => {
      statusCode = (await confirm(message.join(' '))) ? 0 : 1;
      process.exit(statusCode);
    })
    .parse(argv);

  // No arguments: (eg only ['node', '/path/to/this/cli.js'])
  if (argv.length === 2) {
    command.outputHelp();
    process.exit(0);
  }
}
