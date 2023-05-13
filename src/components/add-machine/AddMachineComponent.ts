import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Factory} from "../../entity/Factory";
import {FactoryService} from "../../service/factory/FactoryService";
import {Machine} from "../../entity/Machine";
import {MachineType} from "../../entity/MachineType";
import {MachineService} from "../../service/machine/MachineService";
import {MachineActivity} from "../../entity/MachineActivity";
import {UserService} from "../../service/user/UserService";
import {ValidationError, ValidationErrorsResponse} from "../../util/response/ValidationError";

@Component({
  selector: 'add-machine',
  templateUrl: './AddMachineComponent.html',
  styleUrls: ['./AddMachineComponent.css']
})
export class AddMachineComponent implements OnInit {
  factories$: Observable<Factory[]>;
  newMachine: Machine = {
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


  constructor(public factoryService: FactoryService, public machineService: MachineService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.factoriesInit();
    for (let type in this.machineType) {
      console.log(type)
    }
  }

  private factoriesInit() {
    this.factoryService.getAllFactories()
      .pipe(factories => this.factories$ = factories)
      .subscribe();
  }

  //todo Обработка ошибки создания машины
  public addMachine() {
    this.machineService.addMachine(this.newMachine).subscribe(
        machine => console.log(machine), // успех - выводим добавленную машину
        error => this.errorList = error.error // ошибка - сохраняем информацию об ошибке
      );
  }
}
