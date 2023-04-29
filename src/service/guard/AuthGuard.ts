import {JwtService} from "../../storage/JwtService";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

/**
 * Guard class that checks token presence
 */
@Injectable()
export class AuthGuard {
  constructor(private jwtService: JwtService,
              private router: Router) {}

  /** If the token is available, we are authenticated */
  canActivate(): boolean {
    let canActivate = this.jwtService.isTokenPresent();
    if (!canActivate) {
      this.router.navigate(['/auth']);
    }
    return canActivate;
  }
}
