import {Injectable} from "@angular/core";
import {FactoryRepositoryImpl} from "../repository/factory/FactoryRepositoryImpl";
import {Factory} from "../../entity/Factory";
import {tap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FactoryService {
  constructor(private factoryRepository: FactoryRepositoryImpl) {
  }

  getCurrentFactory() {
    return this.factoryRepository.getCurrentFactory().pipe(
      tap(response => <Factory>response));
  }
}
