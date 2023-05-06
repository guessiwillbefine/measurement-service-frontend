import {Component, Input} from "@angular/core";
import {Measure} from "../../entity/Measure";

@Component({
  selector: 'app-measure',
  templateUrl: './MeasureComponent.html'
})
export class MeasureComponent {
  @Input() measure: Measure;
}
