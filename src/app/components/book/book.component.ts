import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  loggedInUser: any;

  constructor(private UserServ: UserService, private bookServ: BookService) {
    this.book = new Book(1, "", "", "", "");
    this.loggedInUser = new User(1, "", "", "", "", []); 
   }

   ngOnInit(): void {
     this.getLoggedInUser();
   }
   async getLoggedInUser() {
     this.loggedInUser = await this.UserServ.checkLogin();
   }
   checkout(): void {
     this.bookServ.checkout(this.loggedInUser, this.book)?.subscribe(
       resp => {
        if(resp != null) 
         this.loggedInUser = resp;
         this.book.status='Issued';
       }
      
     );
   }

}
