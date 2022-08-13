#!/usr/bin/env node;
import greeting from '../src/greeting.js';
import userName from '../src/userName.js';
import fullGame from '../src/even.js';
import evenGameRules from '../src/even-rules.js';

greeting();
console.log(`Hello, ${userName}!`);
evenGameRules();
fullGame();
