#!/usr/bin/node
import { wellcome, getUserName } from '..';

wellcome();
const user = getUserName();

console.log(`Well, hello, ${user}`);
