#!/usr/bin/node
import { getUserName, wellcome } from '..';
import game from '../game/game';
import { question, solution } from '../porgression-game/progression-game';

wellcome();
console.log('What number is missing in the progression?\n');
const user = getUserName();
console.log(`Well, hello, ${user}\n`);
game(user, question, solution);
