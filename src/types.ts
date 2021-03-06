
export interface RequestHandled {
  (ipAddress: string): void;
}

export interface GenerateRequestHandled {
   (highVolumeTrackingData: Map<string, number>, trackingData: Map<string, number>) : RequestHandled
}

export interface Top100 {
  (): string[];
}

export interface Clear {
  (): void;
}

export interface Tracker {
  request_handled: RequestHandled;
  top100: Top100;
  clear: Clear;
}

export type TrackingData = [string, number];

export interface GetLowestEntry {
  (currentLow: TrackingData, entry: TrackingData): TrackingData;
}