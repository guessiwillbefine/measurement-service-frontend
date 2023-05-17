import {Sensor} from "./Sensor";
import {Factory} from "./Factory";

export interface MachineForView {
  id: number,
  name: string,
  model: string,
  type: string,
  sensors: Sensor[],
  activity: string,
  factory: Factory
}
