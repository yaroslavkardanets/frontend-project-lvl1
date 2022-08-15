#!/usr/bin/env node;
import greeting from '../src/index.js';
import { userName, evenGameRules } from '../src/index.js';
import fullGame from '../games/even.js';

greeting();
console.log(`Hello, ${userName}!`);
evenGameRules();
fullGame();
