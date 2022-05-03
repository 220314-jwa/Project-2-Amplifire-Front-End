import { Component, OnInit } from '@angular/core';
import { Users } from './models/users';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Global Library';
  loggedInUser:Users;

  constructor(private userServ:UserService) {}

  ngOnInit(): void {
    this.getLoggedInUser();
  }

 async getLoggedInUser() {
   this.loggedInUser = await this.userServ.checkLogin();
 }
}
