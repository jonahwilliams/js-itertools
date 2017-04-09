'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function * chain(...xs) {
  for (const it of xs) {
    while (true) {
      const { value, done } = it.next();
      if (done) {
        break;
      }
      yield value;
    }
  }
}

function * cycle(xs) {
  const values = [...xs];
  while (true) {
    yield * values;
  }
}

function * dropWhile(xs, pred) {
  let dropping = true;
  while (true) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    if (!dropping) {
      yield value;
    } else {
      dropping = pred(value);
      if (!dropping) {
        yield value;
      }
    }
  }
}

function* enumerate(xs) {
  let count = 0;
  while (true) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    yield [count, value];
    count += 1;
  }
}

function * filter(xs, predicate) {
  while (true) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    if (predicate(value)) {
      yield value;
    }
  }
}

function * flatMap(xs, f) {
  while (true) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    yield * f(value);
  }
}

function * gen(...xs) {
  for (const x of xs) {
    yield x;
  }
}

function * intersperse(xs, ys) {
  while (true) {
    {
      const { value, done } = xs.next();
      if (done) {
        break;
      }
      yield value;
    }
    {
      const { value, done } = ys.next();
      if (done) {
        break;
      }
      yield value;
    }
  }
}

function * last(xs) {
  let lastValue;
  while (true) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    lastValue = value;
  }
  yield lastValue;
}

function * map(xs, f) {
  while (true) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    yield f(value);
  }
}

function * merge(xs, ys, f) {
  while (true) {
    const [
      { value: lvalue, done: ldone },
      { value: rvalue, done: rdone },
    ] = [xs.next(), ys.next()];
    if (ldone || rdone) {
      break;
    }
    yield f(lvalue, rvalue);
  }
}

function * repeat(item, count = -1) {
  while (count != 0) {
    yield item;
    count--;
  }
}

function * scan(xs, acc, f) {
  let accumulation = acc;
  while (true) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    accumulation = f(accumulation, value);
    yield accumulation;
  }
}

function * takeWhile(xs, pred) {
  while (true) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    if (!pred(value)) {
      break;
    } else {
      yield value;
    }
  }
}

function * take(xs, n) {
  while (n > 0) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    yield value;
    n--;
  }
}

function * zip(xs, ys) {
  while (true) {
    const [
      {value: lvalue, done: ldone},
      {value: rvalue, done: rdone}
    ] = [xs.next(), ys.next()];
    if (ldone || rdone) {
      break;
    }
    yield [lvalue, rvalue];
  }
}

exports.chain = chain;
exports.cycle = cycle;
exports.drop_while = dropWhile;
exports.enumerate = enumerate;
exports.filter = filter;
exports.flatMap = flatMap;
exports.gen = gen;
exports.intersperse = intersperse;
exports.last = last;
exports.map = map;
exports.merge = merge;
exports.repeat = repeat;
exports.scan = scan;
exports.takeWhile = takeWhile;
exports.take = take;
exports.zip = zip;
