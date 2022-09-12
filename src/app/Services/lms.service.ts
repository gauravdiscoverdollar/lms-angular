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
    desc : "Originally published: 2008",
    genre : "Self-help",
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
    desc : "Originally published: 2012",
    genre : "Self-help",
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
    desc : "Originally published: 2018",
    genre : "Personal-finance",
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
    desc : "Originally published: 2020",
    genre : "Personal-finance",
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
    genre : "Buisness",
    status : 'active',
    favourite : false,
    lastViewed : new Date(),
    addedBy : "Gaurav Singh"
  }
]
  genres : object = ['Self-help','Buisness','Personal-finance'];
  constructor() { }

  getGenresList(){
    return this.genres;
  }


   getBookListByGenre(genre:string){
    let booklist: lms[] = this.books.filter((val)=>{
      return val.genre == genre && val.status != 'deleted';
    })
    return booklist;
  }
  

}
