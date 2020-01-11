#!/usr/bin/node
import { wellcome } from '..';
import game from '../game';
import { question, solution } from '../games/gcd-game';

const gameDiscription = 'Find the greatest common divisor!';
game(wellcome(gameDiscription), question, solution);
