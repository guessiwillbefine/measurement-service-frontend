import {Injectable} from "@angular/core";
import {MachineRepositoryImpl} from "../repository/machine/MachineRepositoryImpl";
import {MachineForDto} from "../../entity/MachineForDto";

@Injectable()
export class MachineService {
  constructor(private machineRepository: MachineRepositoryImpl) {
  }

  getMachineById(id: string) {
    return this.machineRepository.getMachineById(id);
  }

  addMachine(machine: MachineForDto) {
    return this.machineRepository.addMachine(machine);
  }

  delete(id: string) {
    return this.machineRepository.deleteMachine(id);
  }

  update(id: string, machine: MachineForDto) {
    return this.machineRepository.updateMachine(id, machine);
  }
}
