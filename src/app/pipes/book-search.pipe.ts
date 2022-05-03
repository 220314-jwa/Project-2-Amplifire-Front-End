import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'bookSearch'
})
export class BookSearchPipe implements PipeTransform {
// implement this to do what we want the pipe to do
  // value is the value to the left of the pipe operator (|)
  // and args is any other parameters we want the pipe to have
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(books: Book[], searchText: string): Book[] {
    let filteredBooks = [];
    searchText = searchText.toLowerCase();

    for (let book of books) {
      if (book.title.toLowerCase().includes(searchText)
      ||    book.description.toLowerCase().includes(searchText)
      ||    book.genre.toLowerCase().includes(searchText)) {
            filteredBooks.push(book);
          }
      }
    return filteredBooks;
}
  

}
