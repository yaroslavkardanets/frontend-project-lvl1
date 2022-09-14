#!/usr/bin/env node
// import hello from '../src/index.js';
import { calcGameRules, calcGameRound } from '../src/games/calc.js';
import runGame from '../src/index.js';

// gameRules(evenGameRules);
runGame(calcGameRules, calcGameRound);
