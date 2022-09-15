import { Component,OnDestroy,OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AddBookComponent } from './Pages/add-book/add-book.component';
import { AuthService } from './Services/auth.service';
import { LmsService } from './Services/lms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  isLoggedIn: boolean = true;
  title = 'lms-Dashboard';
  checkLoginSubscription : Subscription = new Subscription() ;
  genres : any = [];
  constructor(private dialog: MatDialog, private _auth : AuthService,private _lms: LmsService){
    this._lms.getBookListFromLocalStorage();
  }
  ngOnDestroy(): void {
    this.checkLoginSubscription.unsubscribe();
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this._auth.getCurrentUser();
    this.checkLoginSubscription =  this._auth.checkLoggedIn.subscribe(data=>{
      // console.log("AppTrigger",data)
      this.isLoggedIn = data;
      this.genres = this._lms.getGenresList();
      this._lms.getBookListFromLocalStorage();
    })
    // this.genres = this._lms.getGenresList();
  }
  
  checkLoggedIn(check:boolean) {
    this.isLoggedIn = check;
  }
  

  
  openDialog() {
    this.dialog.open(AddBookComponent);
  }
}

