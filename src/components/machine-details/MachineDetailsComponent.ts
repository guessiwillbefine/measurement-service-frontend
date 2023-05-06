import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Machine} from "../../entity/Machine";
import {MachineService} from "../../service/machine/MachineService";
import {Observable} from "rxjs";

@Component({
  selector: "app-machine-datails",
  templateUrl: "./MachineDetailsComponent.html",
  styleUrls: ['./MachineDetailsComponent.css']
})
export class MachineDetailsComponent implements OnInit {
  private id: string;
  public machine$: Observable<Machine>;

  constructor(private route: ActivatedRoute, private machineService: MachineService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.machineService.getMachineById(this.id)
      .pipe(machine => this.machine$ = machine)
      .subscribe();
  }
}
