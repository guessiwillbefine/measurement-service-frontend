import {MachineType} from "./MachineType";
import {MachineActivity} from "./MachineActivity";

export interface Machine {
  id: number,
  name: string,
  model: string,
  type: MachineType,
  activity: MachineActivity
}
