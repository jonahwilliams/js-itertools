export default function * dropWhile(xs, pred) {
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