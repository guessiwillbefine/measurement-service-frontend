import {Observable} from "rxjs";
import {Factory} from "../../../entity/Factory";

export interface FactoryRepository {
  getCurrentFactory(): Observable<Factory>
}
