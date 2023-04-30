import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/AboutComponent";
import {AuthComponent} from "./authentication/auth.component";
import {AuthGuard} from "../service/guard/AuthGuard";
import {AccountComponent} from "./account/AccountComponent";
import {FactoryComponent} from "./factory/FactoryComponent";
import {MachineDetailsComponent} from "./machine-details/MachineDetailsComponent";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', component: AuthComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'logout', component: AuthComponent},
  {path: 'account', component: AccountComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'factory', component: FactoryComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'machines/:id', component: MachineDetailsComponent, canActivate: [() => inject(AuthGuard).canActivate()]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
