#!/usr/bin/node
import { getUserName, wellcome } from '..';
import game from '../game/game';
import { question, solution } from '../prime-game/prime';

wellcome();
console.log('Answear "yes" if given number is prime. Otherwise answear "no".\n');
const user = getUserName();
console.log(`Well, hello, ${user}\n`);
game(user, question, solution);
