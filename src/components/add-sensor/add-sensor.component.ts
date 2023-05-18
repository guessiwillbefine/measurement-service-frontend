import {Component} from "@angular/core";
import {SensorService} from "../../service/sensor/SensorService";
import {Sensor} from "../../entity/Sensor";
import {MeasureSystem} from "../../entity/MeasureSystem";
import {ValidationError, ValidationErrorsResponse} from "../../util/response/ValidationError";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'add-sensor',
  templateUrl: './add-sensor.component.html',
  styleUrls: ['./add-sensor.component.css']
})
export class AddSensorComponent {
  private id: string;
  public newSensor: Sensor = {
    id: 0,
    name: '',
    measure: { id: 0, isCritical: false, value:0 },
    measureSystem: MeasureSystem.AMPERE,
    machineId: 0
  };
  public measureSystem = MeasureSystem;
  public allMeasureSystems = Object.values(MeasureSystem);
  errorList: ValidationErrorsResponse<ValidationError[]>;

  constructor(private route: ActivatedRoute, private router: Router, private sensorService: SensorService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || ''; // Проверяет есть ли параметр
    });
  }

  public addSensor() {
    this.newSensor.machineId = this.id ? parseInt(this.id, 10) || 0 : 0;
    console.log(this.newSensor)
    this.sensorService.addSensor(this.newSensor).subscribe(() => {
        this.router.navigate(['/machines/' + this.id])
      },
      (error: HttpErrorResponse) => {
        this.errorList = error.error;
      }
    );
  }
}
