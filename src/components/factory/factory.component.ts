import {Component, Input, OnInit} from "@angular/core";
import {Factory} from "../../entity/Factory";
import {Observable} from "rxjs";
import {User} from "../../entity/User";
import {UserService} from "../../service/user/UserService";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
  @Input() public factory: Factory;
  public showMachines = false;
  user$: Observable<User>

  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.getCurrentUser()
      .pipe(user => this.user$ = user)
      .subscribe();
  }
}
