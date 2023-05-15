import {Injectable} from "@angular/core";
import {SensorRepositoryImpl} from "../repository/sensor/SensorRepositoryImpl";
import {Sensor} from "../../entity/Sensor";

@Injectable()
export class SensorService {
  constructor(private sensorRepository: SensorRepositoryImpl) {
  }

  addSensor(sensor: Sensor) {
    return this.sensorRepository.addSensor(sensor);
  }
}
