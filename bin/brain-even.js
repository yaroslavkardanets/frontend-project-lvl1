#!/usr/bin/env node
import {
  evenGameRules, gameRound,
} from '../src/games/even.js';
import {
  gameRules, fullGame,
} from '../src/index.js';

gameRules(evenGameRules);
fullGame(gameRound);
