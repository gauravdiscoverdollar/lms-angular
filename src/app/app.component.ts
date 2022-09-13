import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddBookComponent } from './Pages/add-book/add-book.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean = true;
  title = 'lms-Dashboard';
  constructor(private dialog: MatDialog){

  }
  openDialog() {
    this.dialog.open(AddBookComponent);
  }
}
