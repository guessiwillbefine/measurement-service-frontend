import {FactoryRepository} from "./FactoryRepository";
import {Factory} from "../../../entity/Factory";
import {Observable, switchMap} from "rxjs";
import {Injectable} from "@angular/core";
import {UrlConstants} from "../../../util/constants/UrlConstants";
import {JwtService} from "../../../storage/JwtService";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../user/UserService";

@Injectable({
  providedIn: "root"
})
export class FactoryRepositoryImpl implements FactoryRepository {
  private readonly factoryConstants = UrlConstants.FACTORY;

  constructor(private jwtService: JwtService, private http: HttpClient, private userService: UserService) {
  }

  getCurrentFactory(): Observable<Factory> {
    const options = {
      headers: { Authorization: `Bearer ${this.jwtService.getToken()}` },
    };

    return this.userService.getCurrentUser().pipe(
      switchMap(user => {
        return this.http
          .get<Factory>(this.factoryConstants.FACTORY_BY_ID(user.id), options)
      })
    );
  }

  getAllFactories(): Observable<Factory[]> {
    const options = {
      headers: { Authorization: `Bearer ${this.jwtService.getToken()}` },
    };

    return this.http.get<Factory[]>(this.factoryConstants.ALL_FACTORIES, options);
  }
}
