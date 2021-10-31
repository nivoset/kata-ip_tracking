import { Clear } from "./types";

export const generateClear = (...mapsToClear: Map<unknown, unknown>[]) : Clear => () => { 
  mapsToClear.forEach(map => map.clear());
}