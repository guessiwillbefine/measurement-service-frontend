import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/AuthenticationService";
import {AuthenticationServiceImpl} from "../../service/AuthenticationServiceImpl";

@Component({
  selector: 'auth-component',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  username: string;
  password: string;

  constructor(private authenticationService: AuthenticationServiceImpl, private router : Router) {
    this.authenticationService = authenticationService;
  }

  authenticate(): void {
    this.authenticationService.authenticate(this.username, this.password);
  }

  /** если текущий урл - logout, очистим токен */
  ngOnInit(): void {
    console.log(this.router.url);
    if (this.router.url == '/logout') {
      this.authenticationService.logout();
    }
  }
}
