import commander from 'commander';
import inquirer from 'inquirer';
import {version} from '../package.json';

export async function confirmSpecific(key, message) {
  const {confirm} = await inquirer.prompt([{
    type: 'input',
    name: 'confirm',
    message
  }]);

  return confirm === key;
}

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
  abort (no). Exits with status 0 if yes is chosen; else 1.

  To protect especially sensitive operations, you can specify
  --key=somePhrase to require the user to enter exactly somePhrase.`)
    .arguments('<messsage...>')
    .option('-k --key <key>', 'Specific phrase instead of \'yes\'')
    .action(async (message, {key}) => {
      message = message.join(' ');
      const method = key ? confirmSpecific.bind(null, key) : confirm;
      statusCode = (await method(message)) ? 0 : 1;
      process.exit(statusCode);
    })
    .parse(argv);

  // No arguments: (eg only ['node', '/path/to/this/cli.js'])
  if (argv.length === 2) {
    command.outputHelp();
    process.exit(0);
  }
}
