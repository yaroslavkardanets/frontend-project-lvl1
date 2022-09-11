#!/usr/bin/env node
import {
  evenGameRules, evenGameRound,
} from '../src/games/even.js';
import {
  gameRules, fullGame,
} from '../src/index.js';

gameRules(evenGameRules);
fullGame(evenGameRound);
