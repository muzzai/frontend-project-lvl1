#!/usr/bin/node
import { wellcome } from '..';
import game from '../game';
import { question, solution } from '../games/even-game';

const gameDiscription = 'Answer "yes" if the number is even, otherwise answer "no"';
game(wellcome(gameDiscription), question, solution);
