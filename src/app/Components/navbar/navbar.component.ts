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
  constructor(private _auth: AuthService) { 
  }

  ngOnInit(): void {
  }


  logout(){
    console.log("LoggedOut Clicked")
    this._auth.logout();
  }
  

}
