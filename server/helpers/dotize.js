'use strict';

const toDotNotation = (obj, current) => {
  return Object.keys(obj).reduce((converted, key) => {
    const value = obj[key];
    const newKey = (current ? `${current}.${key}` : key);

    if (typeof value === 'object') {
      Object.assign(converted, toDotNotation(value, newKey));
    } else {
      converted[newKey] = value;
    }

    return converted;
  }, {});
};

module.exports = toDotNotation;
