import {JwtService} from "../../../storage/JwtService";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Machine} from "../../../entity/Machine";
import {MachineRepository} from "./MachineRepository";
import {UrlConstants} from "../../../util/constants/UrlConstants";
import {Injectable} from "@angular/core";

@Injectable()
export class MachineRepositoryImpl implements MachineRepository {
  private readonly machineConstants = UrlConstants.MACHINE;

  constructor(private jwtService: JwtService, private http: HttpClient) {
  }

  getMachineById(id: string): Observable<Machine> {
    const options = {
      headers: {Authorization: `Bearer ${this.jwtService.getToken()}`},
    };

    return this.http.get<Machine>(this.machineConstants.MACHINE_BY_ID(id), options);
  }

  addMachine(machine: Machine) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.jwtService.getToken()
      })
    };

    console.log("Before http.post<any>")
    return this.http.post<any>(this.machineConstants.ADD_MACHINE, machine, httpOptions);
  }
}
