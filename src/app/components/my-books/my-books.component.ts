import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Book } from 'src/app/models/book';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  loggedInUser: any;

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }
  async getLoggedInUser() {
    this.loggedInUser = await this.userServ.checkLogin();
  }

}
