import { generateRequestHandled } from './generateRequestHandled'

it('should add first 100 elements to the top 100', () => {
  const top = new Map<string, number>();
  const all = new Map<string, number>();

  const requestHandled = generateRequestHandled(top, all);

  for (let i = 0; i < 100; i++) {
    requestHandled(`test ${i}`);
  }

  expect(top.size).toBe(100);
  expect(all.size).toBe(100);
})

it('should add first 100 elements to the top 100, all 200 should be in all', () => {
  const top = new Map<string, number>();
  const all = new Map<string, number>();

  const requestHandled = generateRequestHandled(top, all);

  for (let i = 0; i < 200; i++) {
    requestHandled(`test ${i}`);
  }

  expect(top.size).toBe(100);
  expect(all.size).toBe(200);
})
