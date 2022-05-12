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
  loggedInUser!: User;

  constructor(private userServ: UserService) {
    
  }

   ngOnInit(): void {
     this.getLoggedInUser();

     
   }

  async getLoggedInUser() {
  this.loggedInUser  = await this.userServ.checkLogin();
     
    // this.loggedInUser = await this.userServ.checkLogin();
  }

}
