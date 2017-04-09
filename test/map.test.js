'use strict';
const test = require('tape');
const { map, gen } = require('../bundle.js');


test('map', (t) => {
  const seq = map(gen(1, 2, 3), (x) =>  x + 1);

  t.deepEqual([...seq], [2, 3, 4]);
  t.end();
});