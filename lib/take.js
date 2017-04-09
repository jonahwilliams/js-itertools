export default function * take(xs, n) {
  while (n > 0) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    yield value;
    n--;
  }
}