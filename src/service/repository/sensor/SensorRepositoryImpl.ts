import {SensorRepository} from "./SensorRepository";
import {Sensor} from "../../../entity/Sensor";
import {Observable} from "rxjs";
import {JwtService} from "../../../storage/JwtService";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UrlConstants} from "../../../util/constants/UrlConstants";
import {Injectable} from "@angular/core";

@Injectable()
export class SensorRepositoryImpl implements SensorRepository{
  private readonly sensorConstants = UrlConstants.SENSOR;

  constructor(private jwtService: JwtService, private http: HttpClient) {
  }
  addSensor(sensor: Sensor): Observable<Sensor> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.jwtService.getToken()
      })
    };

    return this.http.post<Sensor>(this.sensorConstants.ADD_SENSOR, sensor, httpOptions);
  }

}
