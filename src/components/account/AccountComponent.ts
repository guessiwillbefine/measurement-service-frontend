import {Component, OnInit} from "@angular/core";
import {User} from "../../entity/User";
import {JwtService} from "../../storage/JwtService";
import {UrlConstants} from "../../util/constants/UrlConstants";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'registration-component',
  templateUrl: './AccountComponent.html',
  styleUrls: ['./AccountComponent.css']
})
export class AccountComponent implements OnInit {

  user: string;
  userConstants = UrlConstants.USER;

  constructor(private jwtService: JwtService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.setCurrentUserRequest()
    console.log(this.user)
  }

  setCurrentUserRequest() {
    const options =
      {
        headers: {'Authorization': `Bearer ${this.jwtService.getToken()}`},
      };

    this.http.get<User>(this.userConstants.CURRENT_USER, options)
      .subscribe(response => {
        this.user = response.firstName
      });
  }
}
