import { Status } from './../../models/Status';
import { BookService } from 'src/app/services/book.service';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Genre } from 'src/app/models/Genre';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Input() mode!: string;
  book!:Book;

  constructor(private bookServ: BookService) { }

  ngOnInit(): void {
  }
  initBook():void{
    this.book= new Book(0, '',new Genre(1, 'Horor'),'', new Status(1, 'Available'));
  }
  retrieveBook(): void {
    if (this.book.id) {
      this.bookServ.getBookById(this.book.id).subscribe(
        resp=>{
          this.book=resp;
        },
        error=>{
          this.book.id = 0;
          this.book.title = '';
          this.book.genre.name = '';
          this.book.status.name = '';
          this.book.status = new Status(1, 'Available');
        }
      );
    }
  }

  addBook():void {
    this.book.id=0;
    this.bookServ.addBook(this.book).subscribe(
      resp=>{
        this.initBook();
      }
    );
  }

  editPet():void {
    this.bookServ.editBook(this.book).subscribe(
      resp=>{
        this.initBook();
      }
    );
  }

}
