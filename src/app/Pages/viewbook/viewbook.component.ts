import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/Services/auth.service';
import { LmsService } from 'src/app/Services/lms.service';
import { lms } from 'src/app/Types/lmsInterface';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  book!: lms;
  bookId!:number;
  isFavourite:boolean = false;
  constructor(private route:ActivatedRoute,private _lms: LmsService,private toast: NgToastService,private _auth:AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['bookid'];
      let data:any = this._lms.getBookByBookId(this.bookId);
      this.book = data;
      let favList:[number] = this._auth.user.favouriteList;
      if(favList.includes(parseInt(params['bookid']))){
        this.isFavourite = true;
      }
    });
  }
  addToFavourite(bookId:number){
    this._lms.addToFavourite(bookId);
    this.toast.success({detail:"Success",summary:`Book Added To Favourite`,duration:2000});
    this.isFavourite = true;
  }
  removeToFavourite(bookId:number){
    this._lms.removeFromFavourite(bookId);
    this.toast.success({detail:"Success",summary:`Book Removed From Favourite`,duration:2000});
    this.isFavourite = false;
  }
}
