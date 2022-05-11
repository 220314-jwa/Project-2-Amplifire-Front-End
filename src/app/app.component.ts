import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';
  loggedInUser: User;

  constructor(private userServ: UserService) {
    this.loggedInUser = new User(1, "", "", "", "", []);
  }

   ngOnInit(): void {
     this.getLoggedInUser();
   }

  async getLoggedInUser() {
    let obj = await this.userServ.checkLogin();
    if (obj != null) this.loggedInUser = obj;
    // this.loggedInUser = await this.userServ.checkLogin();
  }

  navigateToMain():void{
    this.getLoggedInUser();
  }

}
