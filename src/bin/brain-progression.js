#!/usr/bin/node
import { wellcome } from '..';
import game from '../game';
import { question, solution } from '../games/progression-game';

const gameDiscription = 'What number is missing in the progression?';
game(wellcome(gameDiscription), question, solution);
