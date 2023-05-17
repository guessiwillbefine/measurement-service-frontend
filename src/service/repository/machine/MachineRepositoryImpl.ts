import {JwtService} from "../../../storage/JwtService";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MachineForView} from "../../../entity/MachineForView";
import {MachineRepository} from "./MachineRepository";
import {UrlConstants} from "../../../util/constants/UrlConstants";
import {Injectable} from "@angular/core";
import {MachineForDto} from "../../../entity/MachineForDto";

@Injectable()
export class MachineRepositoryImpl implements MachineRepository {
  private readonly machineConstants = UrlConstants.MACHINE;

  constructor(private jwtService: JwtService, private http: HttpClient) {
  }

  getMachineById(id: string): Observable<MachineForView> {
    const options = {
      headers: {Authorization: `Bearer ${this.jwtService.getToken()}`},
    };

    return this.http.get<MachineForView>(this.machineConstants.MACHINE_BY_ID(id), options);
  }

  addMachine(machine: MachineForDto): Observable<MachineForView> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.jwtService.getToken()
      })
    };

    return this.http.post<any>(this.machineConstants.ADD_MACHINE, machine, httpOptions);
  }

  deleteMachine(id: string): Observable<MachineForView> {
    const options = {
      headers: {Authorization: `Bearer ${this.jwtService.getToken()}`},
    };
    return this.http.delete<MachineForView>(this.machineConstants.MACHINE_BY_ID(id), options);
  }

  updateMachine(id: string, machine: MachineForDto): Observable<MachineForDto> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.jwtService.getToken()
      })
    };

    return this.http.patch<any>(this.machineConstants.MACHINE_BY_ID(id), machine, httpOptions);
  }
}
