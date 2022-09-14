import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() emitData = new EventEmitter<boolean> ();
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private _auth: AuthService,private toast: NgToastService) { }
  
  ngOnInit(): void {
    
  }
  login(){
    if(this.email.status == 'INVALID' || this.password.status == 'INVALID'){
      return;
    }
    let user = {   
        "email":this.email.value,
        "password":this.password.value
    }
    const response = this._auth.userLogin(user);
    // console.log("response",response)
    if(response=='Login Successfull'){
      // this.emitData.emit(true);
      this.toast.success({detail:"Success",summary:response,duration:1500});
    }else if(response == 'Email Not Found'){
      this.toast.warning({detail:"Warning",summary:response,duration:1500});
    }else{
      this.toast.error({detail:"Wrong Password",summary:response,duration:1500});
    }
  }
}
