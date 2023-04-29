import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    HeaderComponent,
    AuthComponent,
    AboutComponent,
    AccountComponent,
    MainComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        FormsModule
    ],
  providers: [AuthenticationServiceImpl, JwtService, AuthGuard],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
