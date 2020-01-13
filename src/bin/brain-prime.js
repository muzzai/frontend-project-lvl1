#!/usr/bin/node
import { wellcome } from '..';
import game from '../game';
import { question, solution } from '../games/prime';

const gameDiscription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
game(wellcome(gameDiscription), question, solution);
