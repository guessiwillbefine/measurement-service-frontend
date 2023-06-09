import {Injectable} from "@angular/core";
import {UserRepository} from "./UserRepository";
import {User} from "../../../entity/User";
import {JwtService} from "../../../storage/JwtService";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UrlConstants} from "../../../util/constants/UrlConstants";
import {Observable} from "rxjs";

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  private readonly userConstants = UrlConstants.USER;

  constructor(private jwtService: JwtService, private http: HttpClient) {
  }

  getCurrentUser(): Observable<User> {
    const options =
      {
        headers: {'Authorization': `Bearer ${this.jwtService.getToken()}`},
      };

    return this.http.get<User>(this.userConstants.CURRENT_USER, options)
      .pipe(response => {
        return response;
      });
  }

  edit(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.jwtService.getToken()
      })
    };
    return this.http.patch<any>(this.userConstants.EDIT(user.id), user, httpOptions);
  }
}
