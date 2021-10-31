import { GetLowestEntry, TrackingData, RequestHandled } from "./types";



const getLowestEntry: GetLowestEntry = ([lowestIp, lowestCount]: TrackingData, [ip, count]: TrackingData) =>
count < lowestCount ? [ip, count] : [lowestIp, lowestCount];


export const generateRequestHandled = (highVolumeTrackingData: Map<string, number>, trackingData: Map<string, number>) : RequestHandled => {
  let threshold = 0;
  return (ipAddress: string) => {
    const callCount = (trackingData.get(ipAddress)
        ?? 0) + 1;
        
    trackingData.set(ipAddress, callCount + 1);
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
