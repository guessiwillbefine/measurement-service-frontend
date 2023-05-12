import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../user/UserService";
import {catchError, map, Observable, of} from "rxjs";
import {Role} from "../../entity/Role";
import {AuthGuard} from "./AuthGuard";

/**
 * Guard class that checks token presence
 */
@Injectable()
export class RoleGuard {
  constructor(private _authGuard: AuthGuard,
              private userService: UserService,
              private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.userService.getCurrentUser().pipe(
      map(user => {
        if (user.role === Role.ADMIN) {
          return true;
        } else {
          this.router.navigate(['/account']);
          return false;
        }
      }),
      catchError( () => {
        return of(false)}));
  }
}
