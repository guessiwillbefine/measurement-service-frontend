import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
import {WorkShiftService} from "../../service/workshift/WorkShiftService";
import {WorkShift} from "../../entity/WorkShift";
import {Location} from "@angular/common";
import {MachineForView} from "../../entity/MachineForView";
import {User} from "../../entity/User";
import {MachineActivity} from "../../entity/MachineActivity";

@Component({
  selector: 'add-work-shift',
  templateUrl: './add-to-work-shift.component.html'
})
export class AddToWorkShiftComponent {
  @Input() machine: MachineForView;
  @Input() user: User;
  workShift: WorkShift;
  machineActivity = MachineActivity;

  constructor(private router: Router, private location: Location, private workShiftService: WorkShiftService) {
  }

  createWorkShift() {
    this.workShift = {
      machineId: this.machine.id,
      workerId: this.user.id
    };

    this.workShiftService.createWorkShift(this.workShift).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/factory']);
      });
      },
    );
  }

  endWorkShift() {
    this.workShift = {
      machineId: this.machine.id,
      workerId: this.user.id
    };

    this.workShiftService.endWorkShift(this.workShift).subscribe(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/factory']);
        });
      },
    );
  }


}
