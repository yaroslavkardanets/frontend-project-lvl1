#!/usr/bin/env node
// import hello from '../src/index.js';
// import gcdGameRules from '../src/gcd-rules.js';
import { gcdGameRules, gcdGameRound } from '../src/games/gcd.js';
import runGame from '../src/index.js';

runGame(gcdGameRules, gcdGameRound);

// gcdGameRules();
// fullGame();
