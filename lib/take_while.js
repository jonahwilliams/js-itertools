export default function * takeWhile(xs, pred) {
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