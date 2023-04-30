import {Injectable} from "@angular/core";
import {FactoryRepositoryImpl} from "../repository/factory/FactoryRepositoryImpl";
import {Factory} from "../../entity/Factory";
import {map} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FactoryService {
  constructor(private factorRepository: FactoryRepositoryImpl) {
  }

  getCurrentFactory() {
    return this.factorRepository.getCurrentFactory().pipe(map(response => {
      console.log(response)
      return response as Factory;
    }))
  }
}
