#!/usr/bin/env node
import {
  evenGameRules, evenGameRound,
} from '../src/games/even.js';
import runGame from '../src/index.js';

// gameRules(evenGameRules);
runGame(evenGameRules, evenGameRound);
