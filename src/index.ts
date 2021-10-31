import { generateClear } from './generateClear';
import { generateTop100 } from './generateTop100';
import { Tracker } from './types'
import { generateRequestHandled } from './generateRequestHandled';

export const generateTracker = (): Tracker => {
  // keep high volume tracking data in a separate map for quick access
  const highVolumeTrackingData: Map<string, number> = new Map();
  // keep all tracking data here
  const trackingData: Map<string, number> = new Map();

  return {
    request_handled: generateRequestHandled(highVolumeTrackingData, trackingData),
    clear: generateClear(highVolumeTrackingData, trackingData),
    top100: generateTop100(highVolumeTrackingData),
  };
}