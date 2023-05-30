import {Component, OnInit} from "@angular/core";
import {FactoryService} from "../../service/factory/FactoryService";
import {Factory} from "../../entity/Factory";
import {Observable} from "rxjs";
import {User} from "../../entity/User";
import {UserService} from "../../service/user/UserService";

@Component({
  selector: 'app-user-factory',
  templateUrl: './user-factory.component.html',
  styleUrls: ['./user-factory.component.css']
})
export class UserFactoryComponent implements OnInit {
  factory$: Observable<Factory>
  user$: Observable<User>

  constructor(public factoryService: FactoryService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.factoryService.getCurrentFactory()
      .pipe(factory => this.factory$ = factory)
      .subscribe()
    this.userService.getCurrentUser()
      .pipe(user => this.user$ = user)
      .subscribe();
  }

}
