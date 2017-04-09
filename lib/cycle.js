export default function * cycle(xs) {
  const values = [...xs];
  while (true) {
    yield * values;
  }
}