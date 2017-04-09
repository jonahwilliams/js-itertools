export default function * gen(...xs) {
  for (const x of xs) {
    yield x;
  }
}