import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private _lmsService: LmsService) { }

  ngOnInit(): void {
    console.log("Genre Clicked", this.route.snapshot.paramMap.get('genre'));
    this.genre =  this.route.snapshot.paramMap.get('genre');
    this.booklist = this._lmsService.getBookListByGenre(this.genre);
    console.log("Booklist",this.booklist)
  }


}
