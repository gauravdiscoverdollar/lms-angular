import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LmsService } from 'src/app/Services/lms.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  single = [{}] ;
  bookListChangesSubcription : Subscription = new Subscription() ;

  
  view: any = [600, 400];
  showXAxis = false;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel:string = "Dates";
  showYAxisLabel = true;
  roundDomains = true;
  yAxisLabel:string = "Number of Book";
  showAxisLabel!: "Genres";
  graphDataChart!: any[];
  colorScheme:any = {
    domain: ['blue', 'olive', 
    'teal', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
    , 'teal',  'yellow']
  };
  constructor(private _lms: LmsService) {
    Object.assign(this, this.single);
   
    // console.log("singles",this.single)
   }
 
  

  ngOnInit(): void {
    this.bookListChangesSubcription = this._lms.bookListChanged$.subscribe(data => {
      this.single = []
      let genreData : any =  this._lms.getBarGraphData();
      for(let key in genreData){
        let d:any = {
          name : key,
          value : genreData[key]
        }
        this.single.push(d);
      }
    })
  }

}
