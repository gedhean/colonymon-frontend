/**
 * @param {any} value
 * @returns {boolean}
 * @description
 * Checks if a given value is blank, empty, or null.
 *
 * @example
 *
 * isBlank(''); // true
 * isBlank(' '); // true
 * isBlank(null); // true
 * isBlank(undefined); // true
 * isBlank([]); // true
 * isBlank({}); // true
 * isBlank({ length: 0, custom: '' }); // true
 * isBlank('Hello'); // false
 * isBlank([1, 2, 3]); // false
 * isBlank({ key: 'value' }); // false
 *
 */

const isBlank = (value) => {
  if (value == null || value === undefined) {
    return true;
  }

  if (typeof value === 'string') {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (value && typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
};

export default isBlank;
