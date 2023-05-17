import {User} from "./User";
import {MachineForView} from "./MachineForView";

export interface Factory {
  id: number,
  name: string,
  users: User[],
  machines: MachineForView[]
}
