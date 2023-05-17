import {Observable} from "rxjs";
import {MachineForView} from "../../../entity/MachineForView";
import {MachineForDto} from "../../../entity/MachineForDto";

export interface MachineRepository {
  getMachineById(id: string): Observable<MachineForView>
  addMachine(machine: MachineForDto): Observable<MachineForView>
  updateMachine(id: string, machine: MachineForDto): Observable<MachineForDto>
  deleteMachine(id: string): Observable<MachineForView>
}
