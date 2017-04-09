'use strict';
const test = require('tape');
const { chain, gen } = require('../bundle.js');


test('chain', t => {
  const seq = chain(gen(1, 2), gen(3, 4), gen(4, 5), gen(6, 7));

  t.deepEquals([...seq], [1, 2, 3, 4, 4, 5, 6, 7]);
  t.end();
});