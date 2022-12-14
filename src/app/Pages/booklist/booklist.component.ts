import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BehaviorSubject } from 'rxjs';
import { LmsService } from 'src/app/Services/lms.service';
import { lms } from 'src/app/Types/lmsInterface';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  genre : any;
  booklist: lms[]=[];
  movedToArchive$ = new BehaviorSubject<any>(true);

  constructor(private route: ActivatedRoute, private _lmsService: LmsService, private router: Router,private toast: NgToastService) { }

  ngOnInit(): void {
    // console.log("Genre Clicked", this.route.snapshot.paramMap.get('genre'));
    // this.genre =  this.route.snapshot.paramMap.get('genre');
    // this.booklist = this._lmsService.getBookListByGenre(this.genre);
    // console.log("Booklist",this.booklist)
    this.movedToArchive$.subscribe(data=>{
      this.route.params.subscribe(params => {
        this.genre = params['category'];
        this.genre =  this.route.snapshot.paramMap.get('genre');
        this.booklist = this._lmsService.getBookListByGenre(this.genre);
      });
    })
  
  }

  moveToArchive(bookId:number){
    // console.log("Archive Clicked",bookId)
    this._lmsService.addBookToArchive(bookId);
    this.toast.success({detail:"Success",summary:`Book Archived`,duration:2000});
    this.movedToArchive$.next(false);
    // this.reloadCurrentRoute();
  }
  
}
