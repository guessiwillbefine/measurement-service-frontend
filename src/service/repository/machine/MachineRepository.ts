import {Observable} from "rxjs";
import {Machine} from "../../../entity/Machine";

export interface MachineRepository {
  getMachineById(id: string): Observable<Machine>
}
