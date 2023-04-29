import {Role} from "./Role";
import {AccountStatus} from "./AccountStatus";

export interface User {
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  role: Role;
  status: AccountStatus;
}
