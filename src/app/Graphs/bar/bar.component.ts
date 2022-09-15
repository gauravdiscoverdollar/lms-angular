import { Component, OnInit } from '@angular/core';
import { LmsService } from 'src/app/Services/lms.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  single = [{}] ;
  
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
    this.single = []
    let data : any =  this._lms.getBarGraphData();
    // console.log("Bar Graph",data)
    for(let key in data){
      let d:any = {
        name : key,
        value : data[key]
      }
      this.single.push(d);
    }
    // console.log("singles",this.single)
   }
   
  

  ngOnInit(): void {
    
  }

}
