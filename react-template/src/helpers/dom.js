/**
 * Вертикально сравнивает позиции элементов в DOM-дереве
 * @param  { HTMLElement } parent - Родительский компонент
 * @param  { HTMLElement } child - Потомок
 * @returns {boolean} Содержит ли один элемент внутри себя другой
 */
export function isDescendant(parent, child) {
  let node = child.parentNode;
  while (node != null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}