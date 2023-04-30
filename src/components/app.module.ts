import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthComponent} from "./authentication/auth.component";
import {MatInputModule} from "@angular/material/input";
import {AuthenticationServiceImpl} from "../service/AuthenticationServiceImpl";
import {FormsModule} from "@angular/forms";
import {JwtService} from "../storage/JwtService";
import {AboutComponent} from "./about/AboutComponent";
import {AccountComponent} from "./account/AccountComponent";
import {MainComponent} from "./main/MainComponent";
import {AuthGuard} from "../service/guard/AuthGuard";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../service/user/UserService";
import {UserRepositoryImpl} from "../service/repository/user/UserRepositoryImpl";
import {FactoryComponent} from "./factory/FactoryComponent";
import {FactoryService} from "../service/factory/FactoryService";
import {FactoryRepositoryImpl} from "../service/repository/factory/FactoryRepositoryImpl";
import {MachineComponent} from "./machine/MachineComponent";
import {MachineDetailsComponent} from "./machine-details/MachineDetailsComponent";
import {MachineService} from "../service/machine/MachineService";
import {MachineRepositoryImpl} from "../service/repository/machine/MachineRepositoryImpl";
import {SensorComponent} from "./sensor/SensorComponent";

@NgModule({
  declarations: [
    HeaderComponent,
    AuthComponent,
    AboutComponent,
    AccountComponent,
    MainComponent,
    FactoryComponent,
    MachineComponent,
    MachineDetailsComponent,
    SensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationServiceImpl,
    JwtService,
    AuthGuard,
    UserService,
    UserRepositoryImpl,
    FactoryService,
    FactoryRepositoryImpl,
    MachineService,
    MachineRepositoryImpl],
  bootstrap: [HeaderComponent]
})
export class AppModule {
}
