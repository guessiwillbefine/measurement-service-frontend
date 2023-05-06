import {Injectable} from "@angular/core";
import {tap} from "rxjs";
import {MachineRepositoryImpl} from "../repository/machine/MachineRepositoryImpl";
import {Machine} from "../../entity/Machine";

@Injectable()
export class MachineService {
  constructor(private machineRepository: MachineRepositoryImpl) {
  }

  getMachineById(id: string) {
    return this.machineRepository.getMachineById(id).pipe(
      tap(response => <Machine>response));
  }
}
