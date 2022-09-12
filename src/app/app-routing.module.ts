import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LmsDashboardComponent } from './Components/lms-dashboard/lms-dashboard.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component : LmsDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
