import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LmsDashboardComponent } from './Components/lms-dashboard/lms-dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAPIs } from './materialExports';

@NgModule({
  declarations: [
    AppComponent,
    LmsDashboardComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAPIs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
