'use strict';
const test = require('tape');
const { zip, gen } = require('../bundle.js');

test('zip', function(t) {
  const seq = zip(gen(1, 2, 3), gen(-1, -2, -3));
  
  t.deepEqual([...seq], [[1, -1], [2, -2], [3, -3]]);
  t.end();
});

test('zip 2', function(t) {
  const seq = zip(gen(2, 3), gen(1));

  t.deepEqual([...seq], [[2, 1]]);
  t.end();
});
