import {Injectable} from "@angular/core";
import {WorkShiftRepository} from "./WorkShiftRepository";
import {WorkShift} from "../../../entity/WorkShift";
import {Observable} from "rxjs";
import {JwtService} from "../../../storage/JwtService";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UrlConstants} from "../../../util/constants/UrlConstants";

@Injectable()
export class WorkShiftRepositoryImpl implements WorkShiftRepository{
  private readonly workShiftConstants = UrlConstants.WORK_SHIFT;

  constructor(private jwtService: JwtService, private http: HttpClient) {
  }
  createWorkShift(workShift: WorkShift): Observable<WorkShift> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.jwtService.getToken()
        })
      };

      return this.http.post<any>(this.workShiftConstants.ADD_WORK_SHIFT, workShift, httpOptions);
  }

  updateWorkShift(workShift: WorkShift): Observable<WorkShift> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.jwtService.getToken()
      })
    };

    return this.http.patch<any>(this.workShiftConstants.UPDATE_WORK_SHIFT, workShift, httpOptions);
  }
}
