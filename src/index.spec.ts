import { generateTracker } from './index'
import { Tracker } from './types';
import { pseudoRandomGenerator } from './pseudoRandom'

let tracker: Tracker

beforeEach(() => {
  tracker = generateTracker();
});

it('should generate a new tracker with no records', () => {
  expect(tracker.top100()).toEqual([]);
})

it('should clear tracker when reset', () => {
  expect(tracker.top100()).toEqual([]);
  tracker.requestHandled("ip");

  expect(tracker.top100()).toEqual(["ip"]);
  tracker.clear();

  expect(tracker.top100()).toEqual([]);
})

it('should give top 100 results', () => {
  var rand = pseudoRandomGenerator(1337 ^ 0xDEADBEEF);
  expect(tracker.top100()).toMatchSnapshot();
  //generate 10000 pseudo-random requests and check if top 100 is correct
  const requests = [];
  for (let i = 0; i < 700; i++) {
    const r = Math.floor(rand() * 10000);
    requests.push([`ip index=${i} numberOfRequests=${r}`, r]);
  }
  requests.forEach(([ip, count]: any) => {
    new Array(count).fill(ip)
        .forEach(tracker.requestHandled)
  });

  expect(tracker.top100()).toMatchSnapshot();
})
