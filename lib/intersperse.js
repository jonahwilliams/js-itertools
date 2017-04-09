export default function * intersperse(xs, ys) {
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