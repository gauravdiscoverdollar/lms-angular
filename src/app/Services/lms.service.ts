import { Injectable } from '@angular/core';
import { lms } from '../Types/lmsInterface';

@Injectable({
  providedIn: 'root'
})
export class LmsService {
  books : lms[] = [{
    bookId: 101,
    bookName: "Managing Oneself",
    bookAuthor: "Peter Drucker",
    price : 250,
    desc : "Originally published: 7 January 2008",
    genres : "Self-help",
    status : 'active',
    favourite : false,
    lastViewed : new Date(),
    addedBy : "Gaurav Singh"
  },
  {
    bookId: 102,
    bookName: "The Miracle Morning",
    bookAuthor: "The Miracle Morning",
    price : 175,
    desc : "Originally published: 7 December 2012",
    genres : "Self-help",
    status : 'active',
    favourite : false,
    lastViewed : new Date(),
    addedBy : "Gaurav Singh"
  },
  {
    bookId: 103,
    bookName: "Rich Dad Poor Dad",
    bookAuthor: "Robert Kiyosaki",
    price : 200,
    desc : "Originally published: 7 December 2018",
    genres : "Personal-finance",
    status : 'active',
    favourite : false,
    lastViewed : new Date(),
    addedBy : "Gaurav Singh"
  },
  {
    bookId: 104,
    bookName: "The Psychology of Money",
    bookAuthor: "Morgan Housel",
    price : 300,
    desc : "Originally published: 8 September 2020",
    genres : "Personal-finance",
    status : 'active',
    favourite : false,
    lastViewed : new Date(),
    addedBy : "Gaurav Singh"
  },
  {
    bookId: 105,
    bookName: "Start with Why",
    bookAuthor: "Simon Sinek",
    price : 290,
    desc : "Originally published: 2009",
    genres : "Business",
    status : 'active',
    favourite : false,
    lastViewed : new Date(),
    addedBy : "Gaurav Singh"
  }
]
  genres : object = ['Selp-help','Business','Personal-finance'];
  constructor() { }

  getGenresList(){
    return this.genres;
  }
  

}
