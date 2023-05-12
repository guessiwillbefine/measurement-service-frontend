import {UserRepositoryImpl} from "../repository/user/UserRepositoryImpl";
import {Injectable} from "@angular/core";
import {User} from "../../entity/User";

@Injectable()
export class UserService {
  private readonly USER_ROLE_KEY = 'user';

  constructor(private userRepo: UserRepositoryImpl) {
  }

  getCurrentUser() {
    return this.userRepo.getCurrentUser();
  }

  edit(user: User) {
    return this.userRepo.edit(user);
  }

  // saveToStorage(user: User) {
  //   window.localStorage.setItem(this.USER_ROLE_KEY, user.role);
  // }

  // getRole(): Observable<string> {
  //   console.log("Before save")
  //   return of(window.localStorage.getItem(this.USER_ROLE_KEY));
  // }

  // deleteRole() {
  //   window.localStorage.removeItem(this.USER_ROLE_KEY);
  // }
}
