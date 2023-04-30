import {User} from "../../../entity/User";
import {Observable} from "rxjs";

export interface UserRepository {
  getCurrentUser() : Observable<User>;
}
