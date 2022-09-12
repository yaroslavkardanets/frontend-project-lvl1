#!/usr/bin/env node
// import hello from '../src/index.js';
// import gcdGameRules from '../src/gcd-rules.js';
import { gcdGameRules, gcdGameRound } from '../src/games/gcd.js';

import {
  gameRules, fullGame,
} from '../src/index.js';

gameRules(gcdGameRules);
fullGame(gcdGameRound);

// gcdGameRules();
// fullGame();
