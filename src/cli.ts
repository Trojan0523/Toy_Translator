#!/usr/bin/env node
// shebang 一项操作系统特性，可用于运行任何解释语言
// Shebang在文件的第一行时，Node.js才会高兴地将其忽略为注释
import * as commander from "commander";
import {translate} from "./main";

const program = new commander.Command();
program
  .version('0.0.2')
  .name('翻译')
  .usage('<English>')
  .arguments('<English>')
  .action(function (english) {
    translate(english)
  })
;
program.parse(process.argv);