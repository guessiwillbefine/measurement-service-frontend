import {UrlConstants} from "../util/constants/UrlConstants";
import {ContentType} from "../util/constants/ContentType";
import {Injectable} from "@angular/core";
import {HttpMethod} from "../util/constants/HttpMethod";
import {JwtService} from "../storage/JwtService";
import {Router} from "@angular/router";
import {AuthenticationService} from "./AuthenticationService";

@Injectable()
export class AuthenticationServiceImpl implements AuthenticationService {
  private readonly authConstants = UrlConstants.AUTHENTICATION;

  constructor(private jwtService: JwtService, private router: Router) {
  }

  authenticate(username: string, password: string): void {
    console.log(this.authConstants.AUTHENTICATION);
    const data =
      {
        username: username,
        password: password
      };

    const options: RequestInit =
      {
        method: HttpMethod.POST,
        headers: {
          'Content-Type': ContentType.JSON,
        },
        body: JSON.stringify(data),
        mode: 'cors'
      };
    fetch(this.authConstants.AUTHENTICATION, options)
      .then(response => response.json())
      .then(data => {
        this.jwtService.saveToken(data.token);
        this.router.navigate(['/main']);
      })
      .catch(error => {
        console.error(error)
        this.router.navigate(['/auth']);
      });
  }

  logout(): void {
    this.jwtService.deleteToken();
  }
}
