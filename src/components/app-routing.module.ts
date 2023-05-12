import {inject, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/AboutComponent";
import {AuthComponent} from "./authentication/auth.component";
import {AuthGuard} from "../service/guard/AuthGuard";
import {RoleGuard} from "../service/guard/RoleGuard";
import {AccountComponent} from "./account/user-account/AccountComponent";
import {UserFactoryComponent} from "./user-factory/user-factory.component";
import {MachineDetailsComponent} from "./machine-details/MachineDetailsComponent";
import {AdminAccountComponent} from "./account/admin-account/AdminAccountComponent";
import {AddMachineComponent} from "./add-machine/AddMachineComponent";

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', component: AuthComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'logout', component: AuthComponent},
  {path: 'account', component: AccountComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {
    path: 'factories',
    component: AdminAccountComponent,
    canActivate: [() => inject(AuthGuard).canActivate() && inject(RoleGuard).canActivate()]
  },
  {path: 'factory', component: UserFactoryComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {path: 'machines/:id', component: MachineDetailsComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  {
    path: 'factories/add_machine',
    component: AddMachineComponent,
    canActivate: [() => inject(AuthGuard).canActivate() && inject(RoleGuard).canActivate()]
  },

  // {path: '', component: AuthComponent, canActivate: [AuthGuard], canActivateChild: [RoleGuard],
  //   children: [
  //     {path: 'account', component: AccountComponent, canActivate: [() => inject(AuthGuard).canActivate()]},
  //     {path: 'factories', component: AdminAccountComponent, canActivateChild: [() => inject(RoleGuard).isAdmin()]},
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
