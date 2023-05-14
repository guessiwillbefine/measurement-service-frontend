import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Machine} from "../../entity/Machine";
import {MachineService} from "../../service/machine/MachineService";
import {Observable} from "rxjs";
import {WebSocketService} from "../../service/socket/WebSocketService";
import {UserService} from "../../service/user/UserService";
import {MeasuresSocketDto} from "../../entity/DTO/SocketMessageDto";

@Component({
  selector: "app-machine-datails",
  templateUrl: "./MachineDetailsComponent.html",
  styleUrls: ['./MachineDetailsComponent.css']
})
export class MachineDetailsComponent implements OnInit {

  private id: string;
  public machine$: Observable<Machine>;
  public measures: MeasuresSocketDto

  constructor(private route: ActivatedRoute,
              private machineService: MachineService,
              private userService: UserService,
              private socketService: WebSocketService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.machineService.getMachineById(this.id)
      .pipe(machine => this.machine$ = machine)
      .subscribe();

    this.userService.getCurrentUser()
      .subscribe(user => {
        console.log("user was get");
        const id = user.id.toString();
        this.machine$.subscribe(x=> {
          console.log(x.id)
          this.register(id, [x.id.toString()]);
          this.subscribeToQueue(id);
        });
      });
  }

  findMeasureBySensorId(id: number) {
    return this.measures.machineMessage.sensors?.find(x=> x.id === id)?.measure.value;
  }
  public subscribeToQueue(id: string) {
    console.log("subscribing");
    const queueName = '/user/' + id + '/queue/messages';
    return this.socketService.watch(queueName).subscribe(x => {
      this.measures = JSON.parse(x.body) as MeasuresSocketDto;
      console.log(x);
    });
  }

  public register(id: string, message: string[] = []): void {
    console.log("registering");
    console.log(JSON.stringify(message));
    const destination = '/app/message/' + id;
    this.socketService.publish({destination: destination, body: JSON.stringify(message)});
  }
}
