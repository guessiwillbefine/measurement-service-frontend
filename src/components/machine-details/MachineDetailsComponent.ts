import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {MachineForView} from "../../entity/MachineForView";
import {MachineService} from "../../service/machine/MachineService";
import {Observable} from "rxjs";
import {UserService} from "../../service/user/UserService";
import {User} from "../../entity/User";
import {Role} from "../../entity/Role";
import {MachineType} from "../../entity/MachineType";
import {Factory} from "../../entity/Factory";
import {FactoryService} from "../../service/factory/FactoryService";
import {ValidationError, ValidationErrorsResponse} from "../../util/response/ValidationError";
import {MachineForDto} from "../../entity/MachineForDto";
import {HttpErrorResponse} from "@angular/common/http";
import {WebSocketService} from "../../service/socket/WebSocketService";
import {MeasuresSocketDto} from "../../entity/DTO/SocketMessageDto";

@Component({
  selector: "app-machine-datails",
  templateUrl: "./MachineDetailsComponent.html",
  styleUrls: ['./MachineDetailsComponent.css']
})
export class MachineDetailsComponent implements OnInit {
  public id: string;
  public machine$: Observable<MachineForView>;
  public user$: Observable<User>;
  public factories$: Observable<Factory[]>;
  public role = Role;
  public editMode: boolean = false;
  public machineToUpdate: MachineForDto = {} as MachineForDto;
  public machineType = MachineType;
  public errorList: ValidationErrorsResponse<ValidationError[]>;
  public sensors$: MeasuresSocketDto | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private machineService: MachineService,
              private userService: UserService,
              private factoryService: FactoryService,
              private socketService: WebSocketService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userInit();
    this.machineInit();
    this.factoriesInit();
  }

  userInit() {
    this.userService.getCurrentUser()
      .subscribe(user => {
        const id = user.id.toString();
        this.machine$.subscribe(x=> {
          this.register(id, [x.id.toString()]);
          this.subscribeToQueue(id);
        });
      });
  }

  machineInit() {
    this.machineService.getMachineById(this.id)
      .pipe(machine => this.machine$ = machine)
      .subscribe(machine => {
        this.mapToMachineForDto(machine);
      });
  }

  mapToMachineForDto(machineForView: MachineForView) {
    this.machineToUpdate.model = machineForView.model;
    this.machineToUpdate.type = machineForView.type;
    this.machineToUpdate.activity = machineForView.activity;
    this.machineToUpdate.name = machineForView.name;
    this.machineToUpdate.sensors = machineForView.sensors;
    this.machineToUpdate.factoryId = machineForView.factory.id;
  }

  private factoriesInit() {
    this.factoryService.getAllFactories()
      .pipe(factories => this.factories$ = factories)
      .subscribe();
  }

  public deleteMachine() {
    this.machineService.delete(this.id).subscribe(
      machine => {
        this.router.navigate(['/factories']);
      },
      error => console.log(error) // ошибка - сохраняем информацию об ошибке
    );
  }

  cancelUpdate() {
    this.editMode = false
    this.machineInit();
    if (this.errorList) {
      this.errorList.response.splice(0, this.errorList.response.length);
    }
  }

  updateMachine() {
    this.machineService.update(this.id, this.machineToUpdate)
      .subscribe(() => {
          this.editMode = false;
        },
        (error: HttpErrorResponse) => {
          this.errorList = error.error;
        }
      );
  }

  findMeasureBySensorId(id: number) {
    return this.sensors$?.machineMessage.sensors?.find(s => s.id === id)?.measure;
  }
  public subscribeToQueue(id: string) {
    const queueName = '/user/' + id + '/queue/messages';
    return this.socketService.watch(queueName).subscribe(x => {
      try {
        this.sensors$ = JSON.parse(x.body);
      } catch (error) {
        // без комментариев
      }
    });
  }

  public register(id: string, message: string[] = []): void {
    const destination = '/app/message/' + id;
    this.socketService.publish({destination: destination, body: JSON.stringify(message)});
  }
}
