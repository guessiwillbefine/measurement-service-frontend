import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "../../../entity/User";
import {UserService} from "../../../service/user/UserService";
import {FactoryService} from "../../../service/factory/FactoryService";
import {Factory} from "../../../entity/Factory";

@Component({
  selector: 'app-admin',
  templateUrl: './AdminAccountComponent.html',
  styleUrls: ['./AdminAccountComponent.css']
})
export class AdminAccountComponent implements OnInit{
  user$: Observable<User>;
  factories$: Observable<Factory[]>;
  constructor(private userService: UserService, public factoryService: FactoryService) {}

  ngOnInit(): void {
    this.userInit();
    this.factoriesInit();
  }

  private userInit() {
    this.userService.getCurrentUser()
      .pipe(x => this.user$ = x)
      .subscribe();
  }

  private factoriesInit() {
    this.factoryService.getAllFactories()
      .pipe(factories => this.factories$ = factories)
      .subscribe();
  }
}
