import {Component, OnInit} from "@angular/core";
import {User} from "../../entity/User";
import {UserContext} from "../../storage/UserContext";
import {HttpMethod} from "../../util/constants/HttpMethod";
import {JwtService} from "../../storage/JwtService";
import {UrlConstants} from "../../util/constants/UrlConstants";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ContentType} from "../../util/constants/ContentType";

@Component({
  selector: 'registration-component',
  templateUrl: './AccountComponent.html',
  styleUrls: ['./AccountComponent.css']
})
export class AccountComponent implements OnInit {

  user: User;
  userConstants = UrlConstants.USER;

  constructor(private jwtService: JwtService) {
  }

  ngOnInit(): void {
    this.setCurrentUserRequest();
    this.user = UserContext.getUser();
  }

  setCurrentUserRequest() {
    const options: RequestInit =
      {
        method: HttpMethod.GET,
        headers: {
          'Content-Type': ContentType.JSON,
          'Authorization': `Bearer ${this.jwtService.getToken()}`,
        },
        mode: 'cors'
      };

    fetch(this.userConstants.CURRENT_USER, options)
      .then(response => response.json())
      .then(data => UserContext.setUserContext(data))
      .catch(err => console.log(err));
  }
}
