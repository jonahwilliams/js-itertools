
export default function * merge(xs, ys, f) {
  while (true) {
    const [
      { value: lvalue, done: ldone },
      { value: rvalue, done: rdone },
    ] = [xs.next(), ys.next()];
    if (ldone || rdone) {
      break;
    }
    yield f(lvalue, rvalue);
  }
}