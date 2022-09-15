import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() drawer : any;
  toggle :  boolean = false;
  name : string = '';
  email : string = '';

  constructor(private _auth: AuthService) { 
    // console.log("Nav",_auth.user)
    this.name = _auth.user.name;
    this.email = _auth.user.email;
  }

  ngOnInit(): void {
  }


  logout(){
    console.log("LoggedOut Clicked")
    this._auth.logout();
  }
  

}
