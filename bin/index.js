#!/usr/bin/env node

const { Command } = require("commander");
const install = require("../src/commands/install");
const list = require("../src/commands/list");
const use = require("../src/commands/use");

const program = new Command();

program
  .name("mycli")
  .description("AI Skill CLI (like Claude plugins)")
  .version("1.0.0");

program
  .command("install <repo>")
  .description("Install a skill from GitHub")
  .action(install);

program
  .command("list")
  .description("List installed skills")
  .action(list);

program
  .command("use <skill>")
  .description("Apply skill to agent")
  .action(use);

program.parse();