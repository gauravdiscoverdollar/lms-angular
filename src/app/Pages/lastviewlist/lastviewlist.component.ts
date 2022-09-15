import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LmsService } from 'src/app/Services/lms.service';
import { lms } from 'src/app/Types/lmsInterface';

@Component({
  selector: 'app-lastviewlist',
  templateUrl: './lastviewlist.component.html',
  styleUrls: ['./lastviewlist.component.css']
})
export class LastviewlistComponent implements OnInit {
  param! : number;
  booklist : lms[] = [];
  time! : string;
  constructor(private route:ActivatedRoute,private _lms: LmsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.param = params['number'];
      if(this.param == 0){
        this.time = "10 Minutes";
      }else if(this.param == 1){
        this.time = "1 Hour";
      }else if(this.param ==2){
        this.time = "5 Hour";
      }else{
        return;
      }
      let books:any = this._lms.getLastBookListByTime(this.param);
      this.booklist = books;
      // this.reloadCurrentRoute(); // reset and set based on new parameter this time
    });
  }

}
