# kata-ip_tracking


## Description
This is a kata about tracking ip address usage on a site in memory only, and being able to report the top 100 user ip's quickly.

### How it works:
you generate a new Tracker bu calling the generateTracker function
that returns an object with the functions needed to request_handled/top100 and clear

#### request_handled(pi: string)
1. when you call with an ip address it looks up the ip address in a map to get the current number of calls, or 0, then add's one to it since we just called it
2. it pushes that back into the trackingData list
3. then compares the number of calls for that ip vs what the current 'threshold' for the high  volume map is
    1. if you are at or above the threshold, you then push to the high volume thresholds
    2. if the high thresholds is above 100 entries
      1. then we look for the lowest threshold item to remove it
      2. and update the threshold

#### clear()
1. clears the two maps of tracking data.

#### top100()
1. converts the highVolume users to an array,
2. sorts by the number of connections
3. then returns the ip address
4. limited to 100 records



## If i had more time things i would look into
* look closer into performance metrics for Map vs object
* when given 20 million records it does run in the test suite, though it does take some time
* note an issue that i don't reset the threshold number if we call clear. 
would need to refactor for that.

## Testing
unit tests for code exist already (TDD) though performance testing and putting in millions of calls quickly to check how it is working would be needed. I can do in unit tests, however the tests become much longer just to put in the requests.

## Complexity
  * clear
    * Θ(n)
  * top 100
    * Θ(n log(n)) based using quicksort (on the idea the top 100 should only have up to 100 records)
  * request_handled
    * this is the most complicated function, this is the most complicated path I believe being:
    * Θ(n), Θ(n), Θ(n), Θ(n log(n)), Θ(n)