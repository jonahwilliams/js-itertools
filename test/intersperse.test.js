'use strict';
const test = require('tape');
const { intersperse, gen } = require('../bundle.js');

test('intersperse', t => {
  const seq = intersperse(
    gen(1, 2, 3),
    gen('a', 'b', 'c')
  );

  t.deepEquals([...seq], [1, 'a', 2, 'b', 3, 'c']);
  t.end();
});