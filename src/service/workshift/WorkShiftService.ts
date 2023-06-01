import {Injectable} from "@angular/core";
import {WorkShiftRepositoryImpl} from "../repository/workshift/WorkShiftRepositoryImpl";
import {WorkShift} from "../../entity/WorkShift";

@Injectable({
  providedIn: "root"
})
export class WorkShiftService {
  constructor(private workShiftRepository: WorkShiftRepositoryImpl) {
  }

  createWorkShift(workShift: WorkShift) {
    return this.workShiftRepository.createWorkShift(workShift);
  }

  endWorkShift(workShift: WorkShift) {
    return this.workShiftRepository.updateWorkShift(workShift);
  }
}
