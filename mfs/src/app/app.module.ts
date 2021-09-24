import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/dashboard/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Error404Component,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
