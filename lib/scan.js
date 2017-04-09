export default function * scan(xs, acc, f) {
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