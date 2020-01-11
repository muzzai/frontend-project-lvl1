#!/usr/bin/node
import { wellcome } from '..';
import game from '../game';
import { question, solution } from '../games/calc-game';

const gameDiscription = 'What is the result of the expression?';
game(wellcome(gameDiscription), question, solution);
