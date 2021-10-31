import { generateClear } from './generateClear'


it('should clear populated maps', () => {
  const populatedMap = new Map<string, number>();
  populatedMap.set('key', 0);
  const clear = generateClear(populatedMap);

  expect(populatedMap.size).toBe(1);
  clear();
  expect(populatedMap.size).toBe(0);
})

it('should clear populated maps even if multiple pushed in', () => {
  const maps = new Array(10).fill(0).map(() => {
    const populatedMap = new Map<string, number>();
    populatedMap.set('key', 0);
    return populatedMap;
  });
  const clear = generateClear(...maps);

  expect(maps.map(m => m.size).reduce((a, c) => a + c, 0)).toBe(10);
  clear();
  expect(maps.map(m => m.size).reduce((a, c) => a + c, 0)).toBe(0);
})