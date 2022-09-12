import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  genre : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Genre Clicked", this.route.snapshot.paramMap.get('genre'));
    this.genre =  this.route.snapshot.paramMap.get('genre');
  }


}
