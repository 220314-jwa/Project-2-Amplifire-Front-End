import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { Books } from '../models/books';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.css']
})
export class MyBookComponent implements OnInit {
  loggedInUser: any;

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }
  async getLoggedInUser() {
    this.loggedInUser = await this.userServ.checkLogin();
  }

}
