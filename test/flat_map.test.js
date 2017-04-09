'use strict';
const test = require('tape');
const { flatMap, repeat, gen } = require('../bundle.js');

test('flatMap', t => {
  const seq = flatMap(gen(1, 2, 3), (x) => repeat(x, 3));

  t.deepEquals([...seq], [1, 1, 1, 2, 2, 2, 3, 3, 3]);
  t.end();
});