import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  single = [
    {
      "name": "Book Added",
      "series": [
        {
          "name": "10 July 2022",
          "value": "10"
        },
        {
          "name": "11 July 2022",
          "value": "5"
        },
        {
          "name": "12 July 2022",
          "value": "17"
        },
        {
          "name": "13 July 2022",
          "value": "6"
        }
      ],
    }
  ];
  
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
   constructor() {
    Object.assign(this, this.single)
   }

  ngOnInit(): void {

  }

}
