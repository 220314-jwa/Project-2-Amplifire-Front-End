import { BookService } from './../services/book.service';
import { Users } from './../models/users';
import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BookComponent implements OnInit {
  books: Books[];
  loggedInUser: any;
  bookSearchText: string = '';

  constructor(private userServ: UserService, private bookServ: BookService) { }

  ngOnInit(): void {
    this.getBooks();
    this.getLoggedInUser();
  }

  async getLoggedInUser() {
    this.loggedInUser = await this.userServ.checkLogin();
  }

  getBooks() {
    // when we subscribe to the Observable, it sends the request 
    // and we can set up what we want to do with the response
    // in a callback function.
    this.bookServ.getBooks().subscribe(
      resp => {
        this.books = resp;
      }
    );
  }

}
