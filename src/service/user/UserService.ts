import {UserRepositoryImpl} from "../repository/user/UserRepositoryImpl";
import {Injectable} from "@angular/core";
import {User} from "../../entity/User";

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepositoryImpl) {
  }

  getCurrentUser() {
    return this.userRepo.getCurrentUser();
  }

  edit(user: User) {
    return this.userRepo.edit(user);
  }
}
