import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LmsDashboardComponent } from './Components/lms-dashboard/lms-dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAPIs } from './materialExports';
import { GenresComponent } from './Pages/genres/genres.component';
import { BooklistComponent } from './Pages/booklist/booklist.component';
import { AddBookComponent } from './Pages/add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { ArchivefavlistComponent } from './Pages/archivefavlist/archivefavlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LmsDashboardComponent,
    LoginComponent,
    NavbarComponent,
    GenresComponent,
    BooklistComponent,
    AddBookComponent,
    ArchivefavlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialAPIs,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
