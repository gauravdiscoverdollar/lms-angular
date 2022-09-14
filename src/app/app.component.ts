import { Component,OnDestroy,OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddBookComponent } from './Pages/add-book/add-book.component';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  isLoggedIn: boolean = false;
  title = 'lms-Dashboard';
  checkLoginSubscription : Subscription = new Subscription() ;

  constructor(private dialog: MatDialog, private _auth : AuthService){

  }
  ngOnDestroy(): void {
    this.checkLoginSubscription.unsubscribe();
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.checkLoginSubscription =  this._auth.checkLoggedIn.subscribe(data=>{
      this.isLoggedIn = data;
    })

  }
  
  checkLoggedIn(check:boolean) {
    this.isLoggedIn = check;
  }
  

  
  openDialog() {
    this.dialog.open(AddBookComponent);
  }
}

