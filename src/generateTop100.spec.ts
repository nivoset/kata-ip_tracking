import { generateTop100 } from './generateTop100'

it('should return the 1 item passed in', () => {
  const items = new Map<string, number>();
  items.set('a', 1);
  const top100 = generateTop100(items);
  expect(top100()).toEqual(['a']);
});

it('should return multiple results in order', () => {
  const items = new Map<string, number>();
  items.set('a', 10);
  items.set('b', 9);
  items.set('c', 8);
  items.set('d', 7);
  items.set('e', 6);
  items.set('f', 5);
  items.set('g', 4);
  items.set('h', 3);
  items.set('i', 2);
  items.set('j', 1);
  const top100 = generateTop100(items);
  expect(top100()).toEqual(['a','b','c','d','e','f','g','h','i','j']);
});

it('should return 100 results in order', () => {
  const items = new Map<string, number>();
  const expected = [];
  for (let i = 0; i < 100; i++) {
    items.set(i.toString(), 1000 - i);
    expected.push(i.toString());
  }
  const top100 = generateTop100(items);
  expect(top100()).toEqual(Array.from(expected));
});