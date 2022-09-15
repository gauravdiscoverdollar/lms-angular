import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : any ;
  isLoggedIn = false;

  checkLoggedIn = new BehaviorSubject<any>(false);

  
  constructor() { }



  userLogin(user:any){
    let usersData: any = localStorage.getItem('users');
    usersData = JSON.parse(usersData);
    let data:any;
    usersData.map((val:any)=>{
      if(val.email == user.email){
        if(val.password !== user.password){
          data = "Password Do Not Match";
        }else{
          this.user = val;
          this.isLoggedIn = true;
          data = "Login Successfull";
          localStorage.setItem('currentUser',this.user.id)
          this.checkLoggedIn.next(true);
        }
      }
    })
    if(data==undefined){
      data = "Email Not Found";
    }
    // console.log("User",this.user)
    return data;
  }


  getCurrentUser(){
    let currentUserId:any = localStorage.getItem('currentUser');
    let users:any = localStorage.getItem('users');
    users = JSON.parse(users);
    
    let currentUser:any = users[parseInt(currentUserId)];
    // console.log("Ckksk",currentUser)
    if(currentUser){
      this.user = currentUser;
      this.isLoggedIn = true;
      this.checkLoggedIn.next(true);
    }
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.user = null;
    this.isLoggedIn = false;
    this.checkLoggedIn.next(false);
  }

}
