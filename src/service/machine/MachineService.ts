import {Injectable} from "@angular/core";
import {tap} from "rxjs";
import {MachineRepositoryImpl} from "../repository/machine/MachineRepositoryImpl";
import {MachineForView} from "../../entity/MachineForView";
import {MachineForDto} from "../../entity/MachineForDto";

@Injectable()
export class MachineService {
  constructor(private machineRepository: MachineRepositoryImpl) {
  }

  getMachineById(id: string) {
    return this.machineRepository.getMachineById(id).pipe(
      tap(response => <MachineForView>response));
  }

  addMachine(machine: MachineForDto) {
    return this.machineRepository.addMachine(machine);
  }

  delete(id: string) {
    return this.machineRepository.deleteMachine(id);
  }

  update(machine: MachineForDto) {
    return this.machineRepository.updateMachine(machine);
  }
}
