import {FactoryRepository} from "./FactoryRepository";
import {Factory} from "../../../entity/Factory";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {UrlConstants} from "../../../util/constants/UrlConstants";
import {JwtService} from "../../../storage/JwtService";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../user/UserService";
import {User} from "../../../entity/User";

@Injectable({
  providedIn: "root"
})
export class FactoryRepositoryImpl implements FactoryRepository {
  private readonly factoryConstants = UrlConstants.FACTORY;
  private user: User;

  constructor(private jwtService: JwtService, private http: HttpClient, private userService: UserService) {
    console.log('FactoryRepositoryImpl.constructor()')
  }

  getCurrentFactory(): Observable<Factory> {
    console.log('FactoryRepositoryImpl.getCurrentFactory()')
    const options =
      {
        headers: {'Authorization': `Bearer ${this.jwtService.getToken()}`},
      };

    console.log('Before take user from userService')
    this.userService.getCurrentUser().subscribe(user => {
        console.log(user)
        this.user = user
      },
      error => console.error(error),
      () => console.log('USER ' + this.user)
    )

    console.log('After take user from userService')

    console.log('ID: ' + this.user.id)
    return this.http.get<Factory>(this.factoryConstants.FACTORY_BY_ID(this.user.id), options)
      .pipe(response => {
        console.log(response)
        return response;
      });
  }

  // ngOnInit(): void {
  //   console.log('Factory Repository start OnInit()')
  //
  //   this.userService.getCurrentUser().subscribe(user => {
  //     console.log(user)
  //     this.user = user
  //   })
  //
  //   console.log('Factory Repository end OnInit()')
  // }
}
