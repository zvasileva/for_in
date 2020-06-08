export function moveElement(arr, from, to) {
	arr.splice(to, 0, arr.splice(from, 1)[0]);
	return arr;
}

export function orderByProps(items, sorts) {
	let result = [];
	for (const item in items) {
		if (Object.prototype.hasOwnProperty.call(items, item)) {
			const resultItem = {};
			resultItem.key = item;
			resultItem.value = items[item];
			result.push(resultItem);
		}
	}

	result.sort((a, b) => {
		const keyA = a.key.toLowerCase(); const
			keyB = b.key.toLowerCase();
		for (let i = 0; i < sorts.length; i++) {
			if (sorts[i].toLowerCase() === keyA) {
				return 0;
			}
		}
		if (keyA < keyB) {
			return -1;
		}
		if (keyA > keyB) {
			return 1;
		}
	});


	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < sorts.length; j++) {
			if (sorts[j].toLowerCase() === result[i].key.toLowerCase()) {
				result = moveElement(result, i, j);
			}
		}
	}

	return result;
}
