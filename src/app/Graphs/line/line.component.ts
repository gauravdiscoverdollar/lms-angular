import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LmsService } from 'src/app/Services/lms.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  single = [
    {
      "name": "Book Added",
      "series": [{}],
    }
  ];
  bookListChangesSubcription : Subscription = new Subscription() ;

  
  view: any = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel:string = "Dates";
  showYAxisLabel = true;
  roundDomains = true;
  yAxisLabel:string = "Number of Book";
  showAxisLabel!: "Number of Book";
  graphDataChart!: any[];
  colorScheme:any = {
    domain: ['#3f51b5']
  };
   constructor(private _lms: LmsService) {
    Object.assign(this, this.single)
   }
  

  ngOnInit(): void {
    
    this.bookListChangesSubcription = this._lms.bookListChanged$.subscribe(data => {
      this.single[0].series = [];
      let linedata : any =  this._lms.getLineGraphData();
      for(let key in linedata){
        let d:any = {
          name : key,
          value : linedata[key]
        }
        this.single[0].series.push(d);
      }
    })
  }

}
