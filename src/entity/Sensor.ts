import {MeasureSystem} from "./MeasureSystem";
import {Measure} from "./Measure";

export interface Sensor {
  id: number,
  name: string,
  measures: Measure[],
  measureSystem: MeasureSystem
}
