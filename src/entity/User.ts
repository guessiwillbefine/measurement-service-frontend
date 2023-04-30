import {AccountStatus} from "./AccountStatus";
import {Role} from "./Role";

export interface User {
  id: number,
  username: string
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  status: AccountStatus;
  factoryId: number;
}

