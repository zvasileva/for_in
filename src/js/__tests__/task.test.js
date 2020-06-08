import { orderByProps, moveElement } from '../task';

test.each([
	[
		[
			{ key: 'name', value: 'мечник' },
			{ key: 'level', value: 2 },
			{ key: 'attack', value: 80 },
			{ key: 'defence', value: 40 },
			{ key: 'health', value: 10 },
		],
		1,
		0,
		[
			{ key: 'level', value: 2 },
			{ key: 'name', value: 'мечник' },
			{ key: 'attack', value: 80 },
			{ key: 'defence', value: 40 },
			{ key: 'health', value: 10 },
		],
	],
])('change position', (itemsIn, from, to, expected) => {
	const result = moveElement(itemsIn, from, to);

	expect(result).toEqual(expected);
});

test.each([
	[
		{
			name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
		},
		['name', 'level', 'defence'],
		[
			{ key: 'name', value: 'мечник' },
			{ key: 'level', value: 2 },
			{ key: 'defence', value: 40 },
			{ key: 'attack', value: 80 },
			{ key: 'health', value: 10 },
		],
	],
	[
		{
			name: 'мечник', health: 10,
		},
		[],
		[
			{ key: 'health', value: 10 },
			{ key: 'name', value: 'мечник' },
		],
	],
	[
		{
			attack: 80, defence: 40,
		},
		[],
		[
			{ key: 'attack', value: 80 },
			{ key: 'defence', value: 40 },
		],
	],
	[
		{
			attack: 80,
		},
		[],
		[
			{ key: 'attack', value: 80 },
		],
	],
])('get sort', (items, sort, expected) => {
	const result = orderByProps(items, sort);

	expect(result).toEqual(expected);
});
