import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Factory} from "../../entity/Factory";
import {FactoryService} from "../../service/factory/FactoryService";
import {MachineType} from "../../entity/MachineType";
import {MachineService} from "../../service/machine/MachineService";
import {MachineActivity} from "../../entity/MachineActivity";
import {ValidationError, ValidationErrorsResponse} from "../../util/response/ValidationError";
import {MachineForDto} from "../../entity/MachineForDto";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'add-machine',
  templateUrl: './AddMachineComponent.html',
  styleUrls: ['./AddMachineComponent.css']
})
export class AddMachineComponent implements OnInit {
  factories$: Observable<Factory[]>;
  newMachine: MachineForDto = {
    id: 0,
    name: '',
    model: '',
    type: MachineType.CONVEYOR.toString(),
    sensors: [],
    activity: MachineActivity.INACTIVE.toString(),
    factoryId: 0
  };
  machineType = MachineType
  errorList: ValidationErrorsResponse<ValidationError[]>;


  constructor(private route: Router, public factoryService: FactoryService, public machineService: MachineService) {
  }

  ngOnInit(): void {
    this.factoriesInit();
  }

  private factoriesInit() {
    this.factoryService.getAllFactories()
      .pipe(factories => this.factories$ = factories)
      .subscribe();
  }

  public addMachine() {
    this.machineService.addMachine(this.newMachine)
      .subscribe(
        () => {
          this.route.navigate(['/factories']);
        },
        (error: HttpErrorResponse) => {
          this.errorList = error.error;
        }
      );
  }
}
