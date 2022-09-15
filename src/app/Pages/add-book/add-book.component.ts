import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';
import { LmsService } from 'src/app/Services/lms.service';
import { lms } from 'src/app/Types/lmsInterface';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  genres : any;
  years: [number] =[2022];
  newbook! :lms;
  bookId! : number;
  constructor(private _lmsService: LmsService,private dialog: MatDialog, private toast: NgToastService,private router: Router,private _auth:AuthService) {
    
   }

  ngOnInit(): void {
    this.genres = this._lmsService.getGenresList(); 
    this.generateArrayOfYears(); 
    this.bookId = this._lmsService.getNewBookId();
    // console.log(this.router.url)
  }
  addBook(form:NgForm){
    // console.log("Book Added",form.value);
    let book = form.value;
    for(let key in book){
      if(book[key].length==0){
        this.toast.warning({detail:"Empty Required Field",summary:`${key} is Empty`,duration:1500});
        return;
      }
    }
    book.addedBy = this._auth.user.name;
    book.lastViewed = new Date;
    book.archive = false;
    book.bookId = this.bookId;
    book.desc = "Published in Year: " + book.desc;
    this.newbook = book;
    // console.log(this.newbook)
    this._lmsService.addBookToBookList(this.newbook);
    this.dialog.closeAll()
    this.toast.success({detail:"Success",summary:`Book Added Successfull`,duration:2000});
    // this.router.navigateByUrl(this.router.url,{skipLocationChange:true});
    this.reloadCurrentRoute();
  }
  generateArrayOfYears() {
    let max = new Date().getFullYear()
    let min = max - 9  
    for (let i:number = max; i >= min; i--) {
      this.years.push(i)
    }
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

}
