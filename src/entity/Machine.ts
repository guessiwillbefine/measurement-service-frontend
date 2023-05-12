import {Sensor} from "./Sensor";

export interface Machine {
  id: number,
  name: string,
  model: string,
  type: string,
  sensors: Sensor[],
  activity: string,
  factoryId: number
}
