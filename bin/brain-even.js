#!/usr/bin/env node
// import evenGameRules from '../src/games/even.js';
import {
  greeting, hello, gameRules,
} from '../src/index.js';
import { fullGame } from '../src/games/even.js';

greeting('Welcome to the Brain Games!');
hello();
gameRules('Answer "yes" if the number is even, otherwise answer "no".');
fullGame();
