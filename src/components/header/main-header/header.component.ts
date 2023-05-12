import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../service/AuthenticationService";
import {AuthenticationServiceImpl} from "../../../service/AuthenticationServiceImpl";
import {UserService} from "../../../service/user/UserService";
import {Role} from "../../../entity/Role";
import {Observable} from "rxjs";
import {User} from "../../../entity/User";
import {JwtService} from "../../../storage/JwtService";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'measurement control app';
  public role = Role;
  public user$: Observable<User>

  constructor(@Inject(AuthenticationServiceImpl) private authService: AuthenticationService,
              private router: Router,
              public userService: UserService,
              public jwtService: JwtService) {
  }

  ngOnInit(): void {
    if (this.jwtService.getToken()) {
      this.userService.getCurrentUser().pipe(user => this.user$ = user).subscribe();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
