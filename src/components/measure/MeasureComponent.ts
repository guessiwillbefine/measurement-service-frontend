import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-measure',
  templateUrl: './MeasureComponent.html'
})
export class MeasureComponent {
  @Input() measure: number | undefined;
}
