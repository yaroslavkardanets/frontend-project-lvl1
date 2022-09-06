#!/usr/bin/env node
// import evenGameRules from '../src/games/even.js';
import {
  /* greeting,  hello, */ gameRules, fullGame,
} from '../src/index.js';
import { evenGameRules } from '../src/games/even.js';

// greeting();
// hello();
gameRules(evenGameRules);
fullGame();
