
export default function * map(xs, f) {
  while (true) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    yield f(value);
  }
}