import {Observable} from "rxjs";
import {WorkShift} from "../../../entity/WorkShift";

export interface WorkShiftRepository {
  createWorkShift(workShift: WorkShift): Observable<WorkShift>
  updateWorkShift(workShift: WorkShift): Observable<WorkShift>
}
