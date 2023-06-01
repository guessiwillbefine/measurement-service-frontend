import {Component, Input} from "@angular/core";
import {MachineForView} from "../../entity/MachineForView";
import {MachineActivity} from "../../entity/MachineActivity";
import {User} from "../../entity/User";
import {Role} from "../../entity/Role";

@Component({
  selector: 'app-machine',
  templateUrl: './MachineComponent.html',
  styleUrls: ['./MachineComponent.css']
})
export class MachineComponent {
  machineActivity = MachineActivity;
  role = Role;
  @Input() machine: MachineForView;
  @Input() user: User;
}
