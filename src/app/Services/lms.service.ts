import { Injectable } from '@angular/core';
import { lms } from '../Types/lmsInterface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LmsService{
  private books! : lms[];
  private genres : object = ['Self-help','Buisness','Personal-finance','Historical','Thriller','Romance'];

  constructor(private _auth: AuthService) { 
   
  }

  getBookListFromLocalStorage(){
    let bookData :any = localStorage.getItem('books');
    this.books =  JSON.parse(bookData);
  }

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
    localStorage.setItem('books',JSON.stringify(this.books));
  }

  addBookToArchive(bookId:number){
    this.books.map(val=>{
      if(val.bookId === bookId){
        val.archive = true;
      }
    })
    localStorage.setItem('books',JSON.stringify(this.books));
  }


  removeBookFromArchive(bookId:number){
    this.books.map(val=>{
      if(val.bookId === bookId){
        val.archive = false;
      }
    })
    localStorage.setItem('books',JSON.stringify(this.books));
  }

  getArchiveBookList(){
    return this.books.filter((val)=>{
      return val.archive == true;
    })
  }

  addToFavourite(bookId:number){
    if(!this._auth.user.favouriteList.includes(bookId)){
      this._auth.user.favouriteList.push(bookId);
    }
  }

  getFavouriteBooklist(){
    let data:any = this._auth.user.favouriteList;
    return this.books.filter((val)=>{
      return data.includes(val.bookId);
    })
  }

  getBarGraphData(){
    return this.books.reduce((acc:any,curr)=>{
      if(acc[curr.genre] !== undefined){
       acc[curr.genre] = ++acc[curr.genre]
      }else{
       acc[curr.genre] = 1;
      }
      return acc;
   },{});
  }


  getLastBookListByTime(time:number){
    let lastTime:number;
    if(time==0){
      lastTime =10 * 60 * 1000; 
    }else if(time==1){
      lastTime =  60 * 60 * 1000;
    }else if(time==2){
      lastTime = 5 * 60 * 60 * 1000;
    }else{
      return;
    }
    return this.books.filter((item) => (new Date(item.lastViewed).getTime() > Date.now() - lastTime));
  }

}
