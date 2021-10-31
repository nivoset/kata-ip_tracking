import { Top100 } from "./types";

export const generateTop100 = (highVolumeTrackingData: Map<string, number>) : Top100 => () =>
        Array.from(highVolumeTrackingData)
            //sort via the count
            .sort(([, aCount], [, bCount]) => bCount - aCount)
            //map to the ip address
            .map(([ipAddress]) => ipAddress)
            // slice top 100
            .slice(0, 100);