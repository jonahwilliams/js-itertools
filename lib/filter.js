export default function * filter(xs, predicate) {
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