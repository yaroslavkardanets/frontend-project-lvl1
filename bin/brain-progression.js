#!/usr/bin/env node
import runGame from '../src/index.js';
// import progressionGameRules from '../src/progression-rules.js';
import { progressionGameRules, progressionGameRound } from '../src/games/progression.js';

// gameRules(progressionGameRules);
runGame(progressionGameRules, progressionGameRound);
