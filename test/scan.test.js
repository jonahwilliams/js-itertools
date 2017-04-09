'use strict';
const test = require('tape');
const { scan, map, gen } = require('../bundle.js');

test('scan', t => {
  const seq = scan(
    gen(2, 4, 5),
    0,
    (acc, x) => x + acc);

    t.deepEquals([...seq], [2, 6, 11]);
    t.end();
});
