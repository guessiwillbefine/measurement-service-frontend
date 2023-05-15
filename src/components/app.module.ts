import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/main-header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AuthComponent} from "./authentication/auth.component";
import {MatInputModule} from "@angular/material/input";
import {AuthenticationServiceImpl} from "../service/AuthenticationServiceImpl";
import {FormBuilder, FormsModule} from "@angular/forms";
import {JwtService} from "../storage/JwtService";
import {AboutComponent} from "./about/AboutComponent";
import {AccountComponent} from "./account/user-account/AccountComponent";
import {MainComponent} from "./main/MainComponent";
import {AuthGuard} from "../service/guard/AuthGuard";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../service/user/UserService";
import {UserRepositoryImpl} from "../service/repository/user/UserRepositoryImpl";
import {UserFactoryComponent} from "./user-factory/user-factory.component";
import {FactoryService} from "../service/factory/FactoryService";
import {FactoryRepositoryImpl} from "../service/repository/factory/FactoryRepositoryImpl";
import {MachineComponent} from "./machine/MachineComponent";
import {MachineDetailsComponent} from "./machine-details/MachineDetailsComponent";
import {MachineService} from "../service/machine/MachineService";
import {MachineRepositoryImpl} from "../service/repository/machine/MachineRepositoryImpl";
import {SensorComponent} from "./sensor/SensorComponent";
import {MeasureComponent} from "./measure/MeasureComponent";
import {AdminAccountComponent} from "./account/admin-account/AdminAccountComponent";
import {RoleGuard} from "../service/guard/RoleGuard";
import {AddMachineComponent} from "./add-machine/AddMachineComponent";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FactoryComponent} from "./factory/factory.component";
import {RouterComponent} from "./router/router.component";
import {AddSensorComponent} from "./add-sensor/add-sensor.component";
import {SensorService} from "../service/sensor/SensorService";
import {SensorRepositoryImpl} from "../service/repository/sensor/SensorRepositoryImpl";

@NgModule({
  declarations: [
    RouterComponent,
    AuthComponent,
    HeaderComponent,
    AboutComponent,
    AccountComponent,
    AdminAccountComponent,
    MainComponent,
    UserFactoryComponent,
    MachineComponent,
    MachineDetailsComponent,
    SensorComponent,
    MeasureComponent,
    AddMachineComponent,
    FactoryComponent,
    AddSensorComponent
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
    HttpClientModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [AuthenticationServiceImpl,
    JwtService,
    AuthGuard,
    UserService,
    UserRepositoryImpl,
    FactoryService,
    FactoryRepositoryImpl,
    MachineService,
    MachineRepositoryImpl,
    SensorService,
    SensorRepositoryImpl,
    FormBuilder,
    RoleGuard],
  bootstrap: [RouterComponent]
})
export class AppModule {
}
