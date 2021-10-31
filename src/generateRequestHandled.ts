import { GetLowestEntry, GenerateRequestHandled } from "./types";

const getLowestEntry: GetLowestEntry = ([lowestIp, lowestCount], [ip, count]) => count < lowestCount
  ? [ip, count]
  : [lowestIp, lowestCount];

export const generateRequestHandled: GenerateRequestHandled = (highVolumeTrackingData, trackingData) => {
  let threshold = 0;
  return (ipAddress) => {
    const callCount = (trackingData.get(ipAddress)
        ?? 0) + 1;
        
    trackingData.set(ipAddress, callCount);
    // if we are greater than the threshold for being in the high volume, add to the high volume tracking data
    if (callCount >= threshold) {
      highVolumeTrackingData.set(ipAddress, callCount);
      // clear out the lowest entry if you have more than 100 entries
      if (highVolumeTrackingData.size > 100) {
        const [lowestIp, lowestCount] = Array.from(highVolumeTrackingData)
            .reduce(getLowestEntry, ['', Number.MAX_VALUE]);
        // use the lowest count as the new threshold
        threshold = lowestCount;
        highVolumeTrackingData.delete(lowestIp);
      }
    }
  }
}
