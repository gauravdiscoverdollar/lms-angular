import { Component, OnInit } from '@angular/core';
import { LmsService } from 'src/app/Services/lms.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres : any = [];
  constructor(private _lmsService: LmsService) { }

  ngOnInit(): void {
    this.genres = this._lmsService.getGenresList();
  }

}
