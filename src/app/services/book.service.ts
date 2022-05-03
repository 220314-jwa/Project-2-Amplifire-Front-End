import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Books } from '../models/books';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class BookService {
   url: string = 'http://localhost:8080/';
  // // dependency injection: injecting HttpClient
   constructor(private http: HttpClient) { }
 
   getBooks(): Observable<Books[]>{
      return this.http.get(this.url + 'books').pipe(
       // format/map the response body as an array of books
       map(resp => resp as Books[])
     );
   }

  //  async getBooks(): Promise<Books[]> {
  //    let httpResponse = await fetch(this.url + 'books');
  //    if (httpResponse && httpResponse.status===200) {
  //        return await httpResponse.json();
  //    }
  //  }
   checkout(loggedInuser: Users, book: Books): Observable<Users> {
     let userJson = JSON.stringify(loggedInUser);
     if (loggedInUser) {
       return this.http.put(this.url + 'books/' + book.id + '/checkout', {body: userJSON}).pipe(
         map(resp => resp as User)
       );
     }
   }
  // async checkout(loggedInUser:Users, book:Books): Promis<Users> {
  //   let userJSON = JSON.stringify(loggedInUser);
  //   if (loggedInUser) {
  //       let httpResponse = await fetch(this.url + 'books/' + book.id + '/checkout',
  //           {method:'PUT', body:userJSON});
  //       if (httpResponse && httpResponse.status===200) {
  //           return await httpResponse.json();
  //       }
  //   }
  // }
}
