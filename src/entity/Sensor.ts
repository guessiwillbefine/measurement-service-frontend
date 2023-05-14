import {MeasureSystem} from "./MeasureSystem";

export interface Sensor {
  id: number,
  name: string,
  measures: number | undefined,
  measureSystem: MeasureSystem
}
