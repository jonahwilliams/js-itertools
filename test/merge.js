'use strict';
const test = require('tape');
const { merge, gen } = require('../bundle.js');

test('merge', t => {
  let seq = merge(
    gen(1, 2, 3),
    gen(2, 3, 4),
    (x, y) => x + y
  );

  t.deepEquals([...seq], [3, 5, 7]);
  t.end();
});

test('merge with shorter gen', t => {
  let seq = merge(
    gen(1),
    gen(2, 3, 4),
    (x, y) => x - y
  );

  t.deepEquals([...seq], [-1]);
  t.end();
});
