#!/usr/bin/env node --harmony

let co = require('co');
let prompt = require('co-prompt');
let program = require('commander');
let creator = require('./creator.js');

let currentDir = process.cwd();


program
  .version('0.0.1')

program
  .option('-i, --init', 'initialize the project')
  .command('install [name]', 'install one or more packages')
  .command('init')
  .description('initialize project configuration')
  .action(function () {
    co(function* () {
      let projName = yield prompt('project name: ');
      let dir = currentDir + "\\" + projName;
      console.log(`You create project with projName: '${currentDir + "\\" + projName}'`);
      creator.CreateFolder(dir);
      creator.CreteJson(dir+'a.json');
      //TODO: Create Project with Dependencies
    });
  });

program.parse(process.argv);