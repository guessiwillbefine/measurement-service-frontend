import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/AboutComponent";
import {AuthComponent} from "./authentication/auth.component";
import {AuthGuard} from "../service/guard/AuthGuard";
import {MainComponent} from "./main/MainComponent";
import {AccountComponent} from "./account/AccountComponent";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', component: AuthComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'logout', component: AuthComponent},
  {path: 'account', component: AccountComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'main', component: MainComponent, canActivate: [() => inject(AuthGuard).canActivate()]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
