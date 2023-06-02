import {Component, Input} from "@angular/core";
import {Sensor} from "../../entity/Sensor";
import {measureMessage} from "../../entity/DTO/SocketMessageDto";

@Component({
  selector: 'app-sensor',
  templateUrl: './SensorComponent.html',
  styleUrls: ['./SensorComponent.css']
})
export class SensorComponent {
  @Input() sensor: Sensor;
  @Input() measure: measureMessage | undefined;
}
