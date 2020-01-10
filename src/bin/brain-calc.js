#!/usr/bin/node
import { getUserName, wellcome } from '..';
import game from '../game/game';
import { question, solution } from '../calc-game/calc-game';

wellcome();
console.log('What is the result of the expression?\n');
const user = getUserName();
console.log(`Well, hello, ${user}\n`);
game(user, question, solution);
