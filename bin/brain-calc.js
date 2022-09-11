#!/usr/bin/env node
// import hello from '../src/index.js';
import calcGameRound from '../src/games/calc.js';
import { fullGame } from '../src/index.js';

// gameRules(evenGameRules);
fullGame(calcGameRound);
