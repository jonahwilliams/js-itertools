export default function * repeat(item, count = -1) {
  while (count != 0) {
    yield item;
    count--;
  }
}