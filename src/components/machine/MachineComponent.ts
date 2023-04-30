import {Component, Input} from "@angular/core";
import {Machine} from "../../entity/Machine";
import {MachineActivity} from "../../entity/MachineActivity";

@Component({
  selector: 'app-machine',
  templateUrl: './MachineComponent.html',
  styleUrls: ['./MachineComponent.css']
})
export class MachineComponent {
  machineActivity = MachineActivity
  @Input() machine: Machine;
}
