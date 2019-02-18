export const keyValidate = {
	'float': (value, key) => {
		if (key === ',') {
			if (value.length === 0) return false;
			if (value.indexOf(',') !== -1) return false;
		}
		return true;
	},
	'integer': (value, key) => key !== ',',
};

// массив кодов клавиш для проверка ввода и редактирования чисел
export const keyCodes = {
	'number': [      // Key
		'Backspace',  // 8
		'Delete',     // 46
		'ArrowLeft',  // 37
		'ArrowUp',    // 38
		'ArrowRight', // 39
		'ArrowDown',  // 40
		',',          // 188
		'1',          // 49
		'2',          // 50
		'3',          // 51
		'4',          // 52
		'5',          // 53
		'6',          // 54
		'7',          // 55
		'8',          // 56
		'9',          // 57
		'0',          // 48
	],
};
