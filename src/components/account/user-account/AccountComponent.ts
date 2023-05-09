import {Component, OnInit} from "@angular/core";
import {User} from "../../../entity/User";
import {Factory} from "../../../entity/Factory";
import {UserService} from "../../../service/user/UserService";
import {catchError, Observable} from "rxjs";
import {ValidationError, ValidationErrorsResponse} from "../../../util/response/ValidationError";
import {HttpErrorResponse} from "@angular/common/http";
import {FactoryService} from "../../../service/factory/FactoryService";

@Component({
  selector: 'registration-component',
  templateUrl: './AccountComponent.html',
  styleUrls: ['./AccountComponent.css']
})
export class AccountComponent implements OnInit {

  /** текущий пользователь */
  user$: Observable<User>;
  factory$: Observable<Factory>

  /** ошибки валидации с бекенда */
  errorList: ValidationErrorsResponse<ValidationError[]>;

  /** копия пользователя для блока редактирования */
  toUpdate: User;

  emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  editMode: boolean = false;
  readonly String = String;

  constructor(private userService: UserService, public factoryService: FactoryService) {}

  /** текущего пользователя сохраним как стрим, а в subscribe сохраним копию объекта для редактирования */
  ngOnInit(): void {
    this.userInit();
    this.factoryInit();
  }

  cancelUpdate() {
    this.editMode = false
    this.userInit();
    this.errorList.response.splice(0, this.errorList.response.length);
  }

  updateUser() {
    this.userService.edit(this.toUpdate)
      .pipe(x => this.user$ = x)
      .pipe(catchError((error: HttpErrorResponse): any => this.errorList = error.error))
      .subscribe(() => this.editMode = false);
  }

  private userInit() {
    this.userService.getCurrentUser()
      .pipe(x => this.user$ = x)
      .subscribe(toUpdate => this.toUpdate = toUpdate);
  }

  private factoryInit() {
    this.factoryService.getCurrentFactory()
      .pipe(factory => this.factory$ = factory)
      .subscribe();
  }
}
