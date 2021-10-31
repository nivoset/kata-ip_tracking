import { GetLowestEntry, RequestHandled, GenerateRequestHandled } from "./types";

const getLowestEntry: GetLowestEntry = ([lowestIp, lowestCount], [ip, count]) => count < lowestCount
  ? [ip, count]
  : [lowestIp, lowestCount];


export const generateRequestHandled: GenerateRequestHandled = (highVolumeTrackingData, trackingData) => {
  let threshold = 0;
  return (ipAddress) => {
    const callCount = (trackingData.get(ipAddress)
        ?? 0) + 1;
        
    trackingData.set(ipAddress, callCount);

    if (callCount >= threshold) {
      highVolumeTrackingData.set(ipAddress, callCount);
      // clear out the lowest entry if you have more than 100 entries
      if (highVolumeTrackingData.size > 100) {
        const [lowestIp, lowestCount] = Array.from(highVolumeTrackingData)
            .reduce(getLowestEntry, ['', Number.MAX_VALUE]);
        threshold = lowestCount;
        highVolumeTrackingData.delete(lowestIp);
      }
    }
  }
}
