import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SensorService} from "../../service/sensor/SensorService";
import {Sensor} from "../../entity/Sensor";
import {Observable} from "rxjs";
import {ValidationError, ValidationErrorsResponse} from "../../util/response/ValidationError";
import {MeasureSystem} from "../../entity/MeasureSystem";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'sensor-details-app',
  templateUrl: './sensor.details.component.html',
  styleUrls: ['./sensor.details.component.css']
})
export class SensorDetailsComponent implements OnInit {
  public id: string;
  public sensor$: Observable<Sensor>;
  public editMode: boolean = false;
  public criticalIsPresent: boolean;
  public sensorToUpdate: Sensor = {} as Sensor;
  public errorList: ValidationErrorsResponse<ValidationError[]>;
  public measureSystem = MeasureSystem;


  constructor(private route: ActivatedRoute, private router: Router, private sensorService: SensorService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.sensorInit();
  }

  sensorInit() {
    this.sensorService.getSensor(this.id)
      .pipe(sensor => this.sensor$ = sensor)
      .subscribe(sensor => {
        this.sensorToUpdate = sensor
        this.criticalIsPresent = sensor.criticalValue !== null;
        console.log(sensor);
      });
  }

  deleteSensor() {
    this.sensorService.deleteSensor(this.id).subscribe(
      sensor => {
        console.log(sensor.machineId); // успех - выводим добавленную машину
        this.router.navigate(['/machines/' + sensor.machineId]);
      },
      error => console.log(error) // ошибка - сохраняем информацию об ошибке
    );
  }

  updateSensor() {
    this.sensorService.updateSensor(this.id, this.sensorToUpdate)
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
}
