
export default function * zip(xs, ys) {
  while (true) {
    const [
      {value: lvalue, done: ldone},
      {value: rvalue, done: rdone}
    ] = [xs.next(), ys.next()];
    if (ldone || rdone) {
      break;
    }
    yield [lvalue, rvalue];
  }
}