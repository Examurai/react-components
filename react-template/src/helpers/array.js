import lodashFind from 'lodash/find';

/**
 * Поиск в массиве
 * @param {array} array
 * @param {string} elem
 * @returns element in array or null
 */
export function findElementByName(array, el) {
  if (array.length === 0) {
    return undefined;
  }
  return lodashFind(array, item => {
    if (!item.file.name) return false;
    return item.file.name.toUpperCase() === el;
  });
}

export function findElement(array, el) {
  if (array.length === 0) {
    return undefined;
  }
  return lodashFind(array, item => item === el);
}

/**
 * Получает значения всех вложенных объектов из объекта со вложенными массивами и объектами
 * @param {Object} obj - Корневой объект
 * @returns {Array} Возвращает массив путей ко всем примитивам, вложенным в объект, вместе с путем до них
 * @example
 * // 'baz', 'foo', ''
 * rootObject: {
 *   30: { value: "baz" }
 *   31: [ [ { value: "foo" } ], [ { value: "" } ] ]
 * }
 */
