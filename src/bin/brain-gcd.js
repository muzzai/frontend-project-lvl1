#!/usr/bin/node
import { getUserName, wellcome } from '..';
import game from '../game/game';
import { question, solution } from '../GCD-game/gcd-game';

wellcome();
console.log('Find the greatest common divisor!\n');
const user = getUserName();
console.log(`Well, hello, ${user}\n`);
game(user, question, solution);
