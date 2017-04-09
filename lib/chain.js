export default function * chain(...xs) {
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