import {User} from "../entity/User";

/**
 * Context of current user
 */
export class UserContext {
  private static readonly CURRENT_USER = "currentUser";
  static setUserContext(user: User) {
    console.log(user);
    window.localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
  }
  static getUser(): User {
    let user = window.localStorage.getItem(this.CURRENT_USER);
    if (user != null) {
    }
    throw new Error("Error getting user data");
  }
}
