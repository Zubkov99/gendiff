#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../index.js';

const program = new Command();

program
  .version('0.0.1', '-v, --vers', 'output the current version')
  .description('Compares two configuration files and shows a difference.', '-h')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const { format } = program.opts();
    const diff = gendiff(filepath1, filepath2, format);
    console.log(diff);
  });
program.parse(process.argv);
