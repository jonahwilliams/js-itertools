export default function * last(xs) {
  let lastValue;
  while (true) {
    const { value, done } = xs.next();
    if (done) {
      break;
    }
    lastValue = value;
  }
  yield lastValue
}