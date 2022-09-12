#!/usr/bin/env node
import {
  gameRules, fullGame,
} from '../src/index.js';
// import primeGameRules from '../src/prime-rules.js';
import { primeGameRules, primeGameRound } from '../src/games/prime.js';

// hello();
gameRules(primeGameRules);
fullGame(primeGameRound);
