import {Component, Input} from "@angular/core";
import {Factory} from "../../entity/Factory";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent {
  @Input() public factory: Factory;
  public showMachines = false;
}
