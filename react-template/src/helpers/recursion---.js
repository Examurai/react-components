const isObject = val =>
  typeof val === 'object' && !Array.isArray(val) && val !== null;

const paths = (obj = {}) =>
  Object.entries(obj).reduce(
    (product, [key, value]) =>
      (isObject(value) || Array.isArray(value)) && value !== null
        ? product.concat([
          [key, paths(value)], // adds [root, [children]] list
        ])
        : product.concat([key]), // adds [child] list
    [],
  );

const addDelimiter = (a, b) => (a ? `${a}.${b}` : b);

const pathToString = ([root, children]) =>
  children.map(child =>
    Array.isArray(child)
      ? addDelimiter(root, pathToString(child))
      : addDelimiter(root, child),
  );

const preOrder = node => {
  if (node === null) return;
  if (Array.isArray(node)) {
    preOrder(node[0]);
    preOrder(node[1]);
  } else {
    node && console.log(node);
  }
};

const input = {
  '0': {
    value: 'test project update',
  },
  '1': {
    value: 'Акционерное общество',
  },
  '2': {
    value: 'ОРГАНИЗАЦИЯ - 869565001',
  },
  '3': {
    value: '',
  },
  '4': {
    value: 'ОРГАНИЗАЦИЯ - 869565001',
  },
  '5': {
    value: 'Долевое финансирование',
  },
  '6': {
    value: '',
  },
  '7': {
    value: '',
  },
  '8': {
    value: '',
  },
  '9': {
    value: '',
  },
  '10': {
    value: '',
  },
  '11': {
    value: '',
  },
  '12': {
    value: '',
  },
  '13': {
    value: '',
  },
  '14': {
    value: 4875124,
  },
  '15': {
    value: 'Отсутствует',
  },
  '16': {
    value: 'Отсутствует',
  },
  '17': {
    value: 'Менее 25%',
  },
  '18': {
    value: '',
  },
  '19': {
    value: 'многоквартирный дом',
  },
  '20': {
    value: {
      code: '4',
      name: 'Республика Алтай',
    },
  },
  '21': {
    value: '',
  },
  '22': {
    value: '',
  },
  '23': {
    value: '',
  },
  '24': {
    value: '',
  },
  '25': {
    value: '',
  },
  '26': {
    value: '',
  },
  '27': {
    value: '',
  },
  '28': [
    [
      {
        value: 'supertext',
      },
      {
        value: '',
      },
    ],
    [
      {
        value: 'supertext2',
      },
      {
        value: '',
      },
    ],
  ],
  '29': {
    value: '',
  },
  '30': {
    value: '',
  },
  '31': [
    [
      {
        value: '',
      },
      {
        value: 'hypertext',
      },
    ],
  ],
  '32': {
    value: '',
  },
  '8.1': {
    value: null,
  },
  '10.1': {
    value: null,
  },
  '12.1': {
    value: 20,
  },
  '12.2': {
    value: 11,
  },
  '12.3': {
    value: 44,
  },
  '12.4': {
    value: 109,
  },
  '13.1': {
    value: 2,
  },
  '13.2': {
    value: 3,
  },
  '21.1': {
    value: null,
  },
  '21.2': {
    value: null,
  },
  '23.1': {
    value: null,
  },
  '24.1': {
    value: null,
  },
  '26.1': {
    value: null,
  },
  '26.2': {
    value: null,
  },
  '29.1': {
    value: null,
  },
  '29.2': {
    value: null,
  },
  '29.3': {
    value: null,
  },
  '30.1': {
    value: null,
  },
  '30.2': {
    value: null,
  },
  '30.3': {
    value: null,
  },
  '32.1': {
    value: 'Евлампьев',
  },
  '32.2': {
    value: 'Роман',
  },
  '32.3': {
    value: 'Агулович',
  },
  '32.4': {
    value: '+7-444-555-33-22',
  },
  '32.5': {
    value: '123@nnnn.ru',
  },
};

// Должен как-то получить верные пути к полям.
// Сейчас pathToString работает неверно

const result = pathToString(['', paths(input)]);
console.log(paths(input));
console.log('\n');
console.log(result);

// const result = pathToString(["", paths(input)]);
// const a = paths(input)[28];
// preOrder(a);

// Возвращает:
// 28
// 0
// 0
// value
// 1
// value
// 1
// 0
// value
// 1
// value
