#!/usr/bin/node
import { wellcome } from '..';
import game from '../game';
import { question, solution } from '../games/even-game';

const gameDiscription = 'Answear "yes" if the number is even, otherwise answear "no"';
game(wellcome(gameDiscription), question, solution);
