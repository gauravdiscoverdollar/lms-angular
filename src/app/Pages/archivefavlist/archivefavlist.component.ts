import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BehaviorSubject } from 'rxjs';
import { LmsService } from 'src/app/Services/lms.service';
import { lms } from 'src/app/Types/lmsInterface';

@Component({
  selector: 'app-archivefavlist',
  templateUrl: './archivefavlist.component.html',
  styleUrls: ['./archivefavlist.component.css']
})
export class ArchivefavlistComponent implements OnInit {
  param : any;
  booklist: lms[]=[];
  category!:string;
  archive! : boolean;
  changeOccur$ = new BehaviorSubject<any>(true);
  

  // constructor
  constructor(private route: ActivatedRoute,private _lms : LmsService,private toast: NgToastService,private router: Router) {
    
   }

  ngOnInit(): void {

    this.changeOccur$.subscribe(data=>{
      this.route.params.subscribe(params => {
        this.param = params['category'];
        if(this.param == 'archives'){
          this.booklist = this._lms.getArchiveBookList();
          this.category = "Archives";
          this.archive = true;
        }else if(this.param=='favourites'){
          this.booklist = this._lms.getFavouriteBooklist();
          this.category = "Favourite"
          this.archive = false;
        }
      });  
    })
    
   
    // this.param =  this.route.snapshot.paramMap.get('category');
    // this.genre =  this.route.snapshot.paramMap.get('category');
    // console.log("Genre",this.genre)
  }



  moveToArchive(bookId:number){
    this._lms.addBookToArchive(bookId);
    this.toast.success({detail:"Success",summary:`Book Archived`,duration:2000});
    this.changeOccur$.next(false);
  }
  removeFromArchive(bookId:number){
    this._lms.removeBookFromArchive(bookId);
    this.toast.success({detail:"Success",summary:`Book Restored`,duration:2000});
    this.changeOccur$.next(false);

  }

  removeToFavourite(bookId:number){
    this._lms.removeFromFavourite(bookId);
    this.toast.success({detail:"Success",summary:`Book Removed From Favourite`,duration:2000});
    this.changeOccur$.next(false);

  }

}
