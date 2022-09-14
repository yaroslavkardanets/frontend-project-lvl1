#!/usr/bin/env node
import runGame from '../src/index.js';
// import primeGameRules from '../src/prime-rules.js';
import { primeGameRules, primeGameRound } from '../src/games/prime.js';

// hello();
// gameRules(primeGameRules);
runGame(primeGameRules, primeGameRound);
