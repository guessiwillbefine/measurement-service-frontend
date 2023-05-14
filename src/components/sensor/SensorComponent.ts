import {Component, Input} from "@angular/core";
import {Sensor} from "../../entity/Sensor";

@Component({
  selector: 'app-sensor',
  templateUrl: './SensorComponent.html',
  styleUrls: ['./SensorComponent.css']
})
export class SensorComponent {
  @Input() sensor: Sensor;
  @Input() measure: number | undefined;

}
