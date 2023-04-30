import {MachineType} from "./MachineType";
import {MachineActivity} from "./MachineActivity";
import {Sensor} from "./Sensor";

export interface Machine {
  id: number,
  name: string,
  model: string,
  type: MachineType,
  sensors: Sensor[],
  activity: MachineActivity
}
