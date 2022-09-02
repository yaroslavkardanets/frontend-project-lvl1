#!/usr/bin/env node
import hello from '../src/index.js';
// import progressionGameRules from '../src/progression-rules.js';
import { progressionGameRules, fullGame } from '../src/games/progression.js';

hello();
progressionGameRules();
fullGame();
