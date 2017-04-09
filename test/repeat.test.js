'use strict';
const test = require('tape');
const { repeat } = require('../bundle.js');

test('repeat', t => {
  const seq = repeat(1, 3);

  t.deepEquals([...seq], [1, 1, 1]);
  t.end();
});