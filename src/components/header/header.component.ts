import {Component, Inject} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/AuthenticationService";
import {AuthenticationServiceImpl} from "../../service/AuthenticationServiceImpl";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'measurement control app';

  constructor(@Inject(AuthenticationServiceImpl) private authService: AuthenticationService,
              private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
