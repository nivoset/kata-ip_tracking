import { generateTracker } from './generateTracker'


const { clear, top100, request_handled } = generateTracker()

request_handled('127.0.0.1')
console.log(top100())
clear()