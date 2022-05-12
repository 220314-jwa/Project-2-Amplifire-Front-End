import { Books } from './../../models/books';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { User } from 'src/app/models/user';
import { Book } from 'src/app/models/book';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books!: Book[];
  loggedInUser!: User;
  bookSearchText: string = '';

  constructor(private userServ: UserService, private bookServ: BookService) {}

  ngOnInit(): void {
   this.getBooks();
    this.getLoggedInUser();
    
  }
  async getLoggedInUser() {
    this.loggedInUser = await this.userServ.checkLogin();
  }

   getBooks() {
  //   // when we subscribe to the Observable, it sends the request 
  //   // and we can set up what we want to do with the response
  //   // in a callback function.
     this.bookServ.getBooks().subscribe(
       resp => {
         this.books = resp;
       }
     );
   }
}
