import {User} from "../entity/User";

/**
 * Context of current user
 */
export class UserContext {
  private static readonly CURRENT_USER = "currentUser";
  static setUserContext(user: User) {
    window.localStorage.setItem(this.CURRENT_USER, JSON.stringify(user));
  }
  static getUser(): User {
    let user = window.localStorage.getItem(this.CURRENT_USER);
    if (user != null) {
      return JSON.parse(user);
    }
    throw new Error("Error getting user data");
  }
}
