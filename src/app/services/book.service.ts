import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book';
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
  let userJson = JSON.stringify(loggedInUser);
  if (loggedInUser) {
    return this.http.put(this.url + 'book/' + book.id + '/checkout', {body: userJson}).pipe(
      map(resp => resp as User)
    );
  }
  return null;
}
}
