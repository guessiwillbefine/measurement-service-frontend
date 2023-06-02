import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SensorService} from "../../service/sensor/SensorService";
import {Sensor} from "../../entity/Sensor";
import {Observable} from "rxjs";
import {ValidationError, ValidationErrorsResponse} from "../../util/response/ValidationError";
import {MeasureSystem} from "../../entity/MeasureSystem";
import {HttpErrorResponse} from "@angular/common/http";
import {WebSocketService} from "../../service/socket/WebSocketService";
import {MachineService} from "../../service/machine/MachineService";
import {UrlConstants} from "../../util/constants/UrlConstants";
import {MeasuresSocketDto} from "../../entity/DTO/SocketMessageDto";
import {UserService} from "../../service/user/UserService";
import {MachineForView} from "../../entity/MachineForView";
import {Chart, registerables} from "chart.js";
import {FixedSizeArray} from "../../util/collection/FixedSizeArray";

Chart.register(...registerables);

@Component({
  selector: 'sensor-details-app',
  templateUrl: './sensor.details.component.html',
  styleUrls: ['./sensor.details.component.css']
})
export class SensorDetailsComponent implements OnInit {

  @ViewChild('chartCanvas', {static: false}) chartCanvas: ElementRef;

  public sensorId: string;

  public sensor$: Observable<Sensor>;
  private machine$: Observable<MachineForView>;
  public errorList: ValidationErrorsResponse<ValidationError[]>;

  public editMode: boolean = false;
  public criticalIsPresent: boolean;
  public sensorToUpdate: Sensor = {} as Sensor;
  public measureSystem = MeasureSystem;
  public sensorsMeasureResponse: MeasuresSocketDto | undefined;

  /** measure stats vertical axis */
  public values = new FixedSizeArray<number>();

  /** time horizontal axis */
  public timeLine = new FixedSizeArray<string>();

  /** chart object */
  public chart: Chart;

  /** chart configuration */
  private readonly tension: number = 0.15;
  private readonly chartColor: string = 'rgb(84,63,141)';
  private readonly chartDescription: string = 'measure stats';

  constructor(private route: ActivatedRoute, private router: Router,
              private machineService: MachineService,
              private sensorService: SensorService,
              private userService: UserService,
              private socketService: WebSocketService) {
  }

  ngOnInit(): void {
    this.sensorId = this.route.snapshot.params.id;
    this.sensorInit();
    this.machineInit();
    this.userInit();
  }

  machineInit() {
    this.machineService.getBySensorId(this.sensorId)
      .pipe(machine => this.machine$ = machine)
      .subscribe();
  }

  userInit() {
    this.userService.getCurrentUser()
      .subscribe(user => {
        const id = user.id.toString();
        this.machine$.subscribe(x => {
          this.register(id, [x.id.toString()]);
          this.subscribeToQueue(id);
        });
      });

    const data = {
      labels: this.timeLine.getArray(),
      datasets: [{
        label: this.chartDescription,
        data: this.values.getArray(),
        fill: false,
        borderColor: this.chartColor,
        tension: this.tension
      }]
    };

    this.chart = new Chart("measureChart", {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  sensorInit() {
    this.sensorService.getSensor(this.sensorId)
      .pipe(sensor => this.sensor$ = sensor)
      .subscribe(sensor => {
        this.sensorToUpdate = sensor
        this.criticalIsPresent = sensor.criticalValue !== null;
      });
  }

  deleteSensor() {
    this.sensorService.deleteSensor(this.sensorId).subscribe(
      sensor => {
        this.router.navigate(['/machines/' + sensor.machineId]);
      },
      error => console.log(error) // ошибка - сохраняем информацию об ошибке
    );
  }

  updateSensor() {
    this.sensorService.updateSensor(this.sensorId, this.sensorToUpdate)
      .subscribe(() => {
          this.editMode = false;
        },
        (error: HttpErrorResponse) => {
          this.errorList = error.error;
        }
      );
  }

  cancelUpdate() {
    this.editMode = false
    this.sensorInit();
    if (this.errorList) {
      this.errorList.response.splice(0, this.errorList.response.length);
    }
  }

  /** если чекбокс потушили - очистим поле с критическим показателем */
  changeCriticalValueState(checked: boolean) {
    this.criticalIsPresent = checked;
    if (!checked) {
      this.sensorToUpdate.criticalValue = null;
    }
  }

  public subscribeToQueue(userId: string) {
    return this.socketService.watch(UrlConstants.SOCKET.MEASURE_QUEUE(userId))
      .subscribe(response => {
        try {
          this.sensorsMeasureResponse = JSON.parse(response.body);
          let measure = this.sensorsMeasureResponse?.machineMessage.sensors
            .find(x => x.id.toString() === this.sensorId);
          if (measure !== undefined) {
            this.values.push(measure.measure.value);
            this.timeLine.push(this.currentTime());
            this.chart.update();
          }
        } catch (error) {
          // без комментариев
        }
      });
  }

  public register(userId: string, message: string[] = []): void {
    this.socketService.publish({
      destination: UrlConstants.SOCKET.DESTINATION(userId),
      body: JSON.stringify(message)
    });
  }

  private currentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }
}
