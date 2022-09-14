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

}
