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
  tracker.request_handled("ip");

  expect(tracker.top100()).toEqual(["ip"]);
  tracker.clear();

  expect(tracker.top100()).toEqual([]);
})

it('should give top 100 results', () => {
  var rand = pseudoRandomGenerator(1337 ^ 0xDEADBEEF);
  expect(tracker.top100()).toMatchSnapshot();
  // generate 10000 pseudo-random requests and check if top 100 is correct
  // the "ip addresses" used are just strings of data showing index as well as number of 'calls'
  new Array(700).fill(0)
      .map(() => Math.floor(rand() * 10000))
      .map((r, i) => [`ip index=${i} numberOfRequests=${r}`, r])
      .map(([ip, count]: any) => new Array(count).fill(ip))
      .flat()
      .forEach(tracker.request_handled);

  // only used a snapshot here as the order of the top 100 is a large set of data
  expect(tracker.top100()).toMatchSnapshot();
})
