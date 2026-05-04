#!/usr/bin/env node

import { Command } from 'commander'
import { runCommand } from './run.js'

const program = new Command()

program.name('aoc').description('Runner for aoc puzzles').version('1.0.0')

program
    .command('run')
    .argument('<year>', 'Year (e.g. 2015)')
    .argument('<day>', 'Day (e.g. 1)')
    .option('--docker', 'Run inside Docker')
    .action(runCommand)

program.parse()
