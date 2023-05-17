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

  getSensor(id: string) {
    return this.sensorRepository.getSensorById(id);
  }

  deleteSensor(id: string) {
    return this.sensorRepository.deleteSensor(id);
  }

  updateSensor(id:string, sensor: Sensor){
    return this.sensorRepository.updateSensor(id, sensor);
  }
}
