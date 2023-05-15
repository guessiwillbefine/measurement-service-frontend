import {Sensor} from "../../../entity/Sensor";
import {Observable} from "rxjs";

export interface SensorRepository {
  addSensor(sensor: Sensor): Observable<Sensor>
}
