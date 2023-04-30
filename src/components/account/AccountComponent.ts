import {Component, OnInit} from "@angular/core";
import {User} from "../../entity/User";
import {UserService} from "../../service/user/UserService";

@Component({
  selector: 'registration-component',
  templateUrl: './AccountComponent.html',
  styleUrls: ['./AccountComponent.css']
})
export class AccountComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(x=> this.user = x);
  }
}
