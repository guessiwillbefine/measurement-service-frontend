import {Sensor} from "../../../entity/Sensor";
import {Observable} from "rxjs";

export interface SensorRepository {
  addSensor(sensor: Sensor): Observable<Sensor>;
  getSensorById(id: string): Observable<Sensor>;
  deleteSensor(id: string): Observable<Sensor>;
  updateSensor(id: string, sensor: Sensor): Observable<Sensor>;
}
