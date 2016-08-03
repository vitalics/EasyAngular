#!/usr/bin/env node --harmony
let co = require('co');
let prompt = require('co-prompt');
let program = require('commander');

Program();

function Program() {
  program
    .arguments('<command>')
    .option('-n, --name <directory name>', 'Create forlder <directory name>')
    .option('-f, --framework <framework name>', 'initialize with framework(default: bootstrap)')
    .action(function (command) {
      co(function* () {
        let name = yield prompt('name: ');
        let framework = yield prompt.password('framework: ');
        console.log('name: %s framework: %s file: %s',
          name, framework, command);
        console.log(process.argv[1]);
        console.log(`Current directory: ${process.cwd()}`);
      });
    })
    .parse(process.argv);
}

