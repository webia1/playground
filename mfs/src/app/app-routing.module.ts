import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
