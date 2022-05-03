import { UserService } from 'src/app/services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { Books } from '../models/books';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  // fields
  @Input() book: Books;
  loggedInUser: Users;
  

  constructor(private UserServ: UserService, private bookServ: BookService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }
  async getLoggedInUser() {
    this.loggedInUser = await this.UserServ.checkLogin();
  }
  checkout(): void {
    this.bookServ.checkout(this.loggedInUser, this.book).subscribe(
      resp => {
        this.loggedInUser = resp;
        this.book.status='Issued';
      }
    );
  }
}
