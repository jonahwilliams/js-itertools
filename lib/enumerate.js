
export default function* enumerate(xs) {
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