#!/usr/bin/node
import { wellcome } from '..';
import game from '../game';
import { question, solution } from '../games/prime';

const gameDiscription = 'Answear "yes" if given number is prime. Otherwise answear "no".';
game(wellcome(gameDiscription), question, solution);
