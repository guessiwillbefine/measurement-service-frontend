import {MeasureSystem} from "./MeasureSystem";
import {Measure} from "./Measure";

export interface Sensor {
  id: number,
  name: string,
  measureSystem: MeasureSystem,
  measure: Measure
  machineId: number
}
