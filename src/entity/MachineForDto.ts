import {Sensor} from "./Sensor";

export interface MachineForDto {
  id: number,
  name: string,
  model: string,
  type: string,
  sensors: Sensor[],
  activity: string,
  factoryId: number
}
