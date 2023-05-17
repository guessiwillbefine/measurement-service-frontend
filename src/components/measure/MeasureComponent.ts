import {Component, Input} from "@angular/core";
import {measureMessage} from "../../entity/DTO/SocketMessageDto";

@Component({
  selector: 'app-measure',
  templateUrl: './MeasureComponent.html',
  styleUrls: ['/MeasureComponent.css']
})
export class MeasureComponent {
  @Input() measure: measureMessage | undefined;
}
