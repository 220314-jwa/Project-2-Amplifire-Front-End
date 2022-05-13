import { Book } from 'src/app/models/book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string = 'http://localhost:8080/';
  headers = {'Content-type':'application/json',
  'Access-Control-Allow-Origin': '*',
};

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get(this.url + 'books').pipe(
     // format/map the response body as an array of books
     map(resp => resp as Book[])
   );
 }

 checkout(loggedInUser: User, book: Book): Observable<User> |null{
  
  if (loggedInUser) {
    
    return this.http.put(`${this.url } books/ ${book.id }+ /checkout`, loggedInUser).pipe(
      map(resp => resp as User)
    );
  }
  return null;
}
editBook(book:Book){
  return this.http.put(this.url+'books/'+book.id, book, {headers: this.headers}).pipe(map(resp => resp as Book))
}
addBook(book:Book):Observable<Book> {
  return this.http.post(this.url + 'books', book, {headers:this.headers}).pipe(
    map(resp=>resp as Book)
  );
}
getBookById(id:number): Observable<Book>{
  return this.http.get(this.url+ 'books/'+ id).pipe(map(resp => resp as Book));
}



}


