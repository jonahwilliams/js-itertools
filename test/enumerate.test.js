'use strict';
const test = require('tape');
const { enumerate, gen } = require('../bundle.js');

test('enumerate', t => {
  const seq = enumerate(gen('a', 'b', 'c'));

  t.deepEquals([...seq], [[0, 'a'], [1, 'b'], [2, 'c']]);
  t.end();
});