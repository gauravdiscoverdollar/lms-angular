import { Injectable } from '@angular/core';
import { lms } from '../Types/lmsInterface';

@Injectable({
  providedIn: 'root'
})
export class LmsService {
  private books : lms[] = [{
    bookId: 101,
    bookName: "Managing Oneself",
    bookAuthor: "Peter Drucker",
    price : 250,
    desc : "Originally published: 2008",
    genre : "Self-help",
    archive : false,
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
    archive : false,
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
    archive : false,
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
    archive : false,
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
    archive : false,
    favourite : false,
    lastViewed : new Date(),
    addedBy : "Gaurav Singh"
  }
]
  private genres : object = ['Self-help','Buisness','Personal-finance'];
  constructor() { }

  getGenresList(){
    return this.genres;
  }


  getNewBookId(){
    return 10101 + this.books.length;
  }

   getBookListByGenre(genre:string){
    let booklist: lms[] = this.books.filter((val)=>{
      return val.genre == genre && val.archive != true;
    })
    return booklist;
  }
  
  addBookToBookList(book:lms){
    this.books.push(book);
  }

  addBookToArchive(bookId:number){
    this.books.map(val=>{
      if(val.bookId === bookId){
        val.archive = true;
      }
    })
  }

}
