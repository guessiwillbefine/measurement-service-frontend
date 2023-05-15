import {Observable} from "rxjs";
import {MachineForView} from "../../../entity/MachineForView";

export interface MachineRepository {
  getMachineById(id: string): Observable<MachineForView>
}
