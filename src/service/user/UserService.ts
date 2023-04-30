import {UserRepositoryImpl} from "../repository/user/UserRepositoryImpl";
import {Injectable} from "@angular/core";
import {map} from "rxjs";
import {User} from "../../entity/User";
@Injectable()
export class UserService {
  constructor(private userRepo: UserRepositoryImpl) {}

  getCurrentUser() {
    return this.userRepo.getCurrentUser().pipe(map(response => {
      return response as User;
    }));
  }
}
