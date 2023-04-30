import {User} from "./User";
import {Machine} from "./Machine";

export interface Factory {
  id: number,
  name: string,
  users: User[],
  machines: Machine[]
}
