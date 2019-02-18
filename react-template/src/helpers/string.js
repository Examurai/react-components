export function addLeadZero(value) {
  const string = value.toString();

  return string.length < 2 ? `0${string}` : string;
}

export function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
 * Разделяет строку по разрядам
 * @param  {number} number
 * @returns {} Строка, разделенная по разрядам. Например, '100 000'
 */
export function separateByThousands(number) {
  if (!number) {
    return '';
  }
  let [decimal, fractional] = number.toString().split('.');

  decimal = decimal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  fractional = fractional === undefined ? '' : `.${fractional}`;

  return decimal + fractional;
}
