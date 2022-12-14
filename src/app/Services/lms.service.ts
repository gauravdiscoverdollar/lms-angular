import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { lms } from '../Types/lmsInterface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LmsService{
  private books! : lms[];
  private genres : object = ['Self-help','Buisness','Personal-finance','Historical','Thriller','Romance'];
  bookListChanged$ = new BehaviorSubject<any>(true);

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
    this.bookListChanged$.next(false);
    localStorage.setItem('books',JSON.stringify(this.books));
  }


  getBookByBookId(bookId:number){
    let book;
    let newBooks = this.books.filter((val)=>{
      if(val.bookId==bookId){
        book = val;
        val.lastViewed = new Date;
      }
      return val;
    })
    // console.log("NEw",newBooks)
    localStorage.setItem('books',JSON.stringify(newBooks));
    return book;
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
    let usersData: any = localStorage.getItem('users');
    usersData = JSON.parse(usersData);
    usersData[this._auth.user.id] = this._auth.user;
    localStorage.setItem('users',JSON.stringify(usersData));


  }
  removeFromFavourite(bookId:number){
    this._auth.user.favouriteList = this._auth.user.favouriteList.filter((item:number)=> {
      return item !== bookId
    })
    let usersData: any = localStorage.getItem('users');
    usersData = JSON.parse(usersData);
    usersData[this._auth.user.id] = this._auth.user;
    localStorage.setItem('users',JSON.stringify(usersData));
  }

  getFavouriteBooklist(){
    let data:any = this._auth.user.favouriteList;
    return this.books.filter((val)=>{
      return data.includes(val.bookId) && val.archive == false;
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


  getLineGraphData(){
    // const now = new Date();
    // let dates:any = [];
    // for(let i = 0; i<7;i++){
    //   dates.push(new Date(now.getTime() - i * 24 * 60 * 60 * 1000).toISOString())
    // }
    // console.log("Dates",dates);
    // let linegraphbar  = this.books.filter((val)=>{
    //   console.log("VAl Dat",new Date(val.createdAt).toISOString())
    //   return dates.includes(val.createdAt)
    // })
    // console.log("Line Grapgh",linegraphbar,dates);


    return this.books.reduce((acc:any,curr)=>{
      if(acc[new Date(curr.createdAt).toLocaleDateString()] !== undefined){
        acc[new Date(curr.createdAt).toLocaleDateString()] = ++acc[new Date(curr.createdAt).toLocaleDateString()];
      }else{
        acc[new Date(curr.createdAt).toLocaleDateString()] = 1;
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
    return this.books.filter((item) => (new Date(item.lastViewed).getTime() > Date.now() - lastTime) && item.archive == false);
  }

}
