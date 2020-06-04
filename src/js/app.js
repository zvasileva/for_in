// TODO: write your code here
import sum from './basic';

import { orderByProps } from './task';

const obj = {
	name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

console.log('worked');

console.log(sum([1, 2]));

console.log(obj);

console.log(orderByProps(obj, ['name', 'level', 'defence']));
