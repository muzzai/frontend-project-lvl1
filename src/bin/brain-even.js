#!/usr/bin/node
import { getUserName, wellcome } from '..';
import game from '../game/game';

wellcome();
console.log('Answear "yes" if the number is even, otherwise answear "no"\n');
const user = getUserName();
console.log(`Well, hello, ${user}\n`);
game(user);
