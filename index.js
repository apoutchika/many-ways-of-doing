const _ = require('lodash');
const axios = require('axios');

module.exports = {};

module.exports.classic = (nb) => {
  if (nb < 11) {
    return nb;
  }

  return 10;
};

module.exports.classicInversed = (nb) => {
  if (nb > 10) {
    return 10;
  }

  return nb;
};

module.exports.classicWithEqual = (nb) => {
  if (nb <= 10) {
    return nb;
  }

  return 10;
};

module.exports.classicInversedWithEqual = (nb) => {
  if (nb >= 11) {
    return 10;
  }

  return nb;
};

const cache = new Map();
module.exports.cacheLove = (nb) => {
  if (cache.get(nb)) {
    return nb;
  }

  // one of all methods
  const val = Math.min(nb, 10);

  cache.set(nb, val);
  return cache.get(nb);
};

const cache2 = new Map();
module.exports.cacheLoveRefactored = (nb) => {
  if (!cache2.get(nb)) {
    cache2.set(nb, Math.min(nb, 10));
  }

  return cache2.get(nb);
};

module.exports.ternary = (nb) => (nb <= 10 ? nb : 10);

module.exports.ternaryInversed = (nb) => (nb > 10 ? 10 : nb);

module.exports.withMath = (nb) => Math.min(nb, 10);

module.exports.withExternalModule = (nb) => _.min([10, nb]);

module.exports.withArray = (nb) => {
  const res = new Array(10)
    .fill()
    .map((value, key) => key)
    .find((value, key) => key === nb);

  if (res === 0) {
    return 0;
  }

  return res || 10;
};

module.exports.theCheater = (nb) => {
  if (nb === 0) {
    return 0;
  }

  if (nb === 5) {
    return 5;
  }

  if (nb === 10) {
    return 10;
  }

  if (nb === 15) {
    return 10;
  }
};

const prep = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

module.exports.prepared = (nb) => (prep[nb] !== undefined ? prep[nb] : 10);

module.exports.regex = (nb) => (nb.toString().match(/^\d$/) ? nb : 10);

module.exports.unconscious1 = (nb) => {
  switch (nb) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    case 6:
      return 6;
    case 7:
      return 7;
    case 8:
      return 8;
    case 9:
      return 9;
    default:
      return 10;
  }
};

module.exports.unconscious2 = (nb) => {
  for (let i = 0; i <= 10; i += 1) {
    if (i === nb) {
      return i;
    }
  }

  return 10;
};

module.exports.unconscious3 = (nb) => {
  let i = 0;
  do {
    if (i === nb) {
      return i;
    }
    i += 1;
  } while (i <= 10);

  return 10;
};

module.exports.unconscious4 = (nb) => (nb.toString().length === 1 ? nb : 10);

module.exports.useExternalAPI = (nb) => axios
  .get('https://api.mathjs.org/v4/', {
    params: {
      expr: `min(10, ${nb})`,
    },
  })
  .then((res) => res.data);
