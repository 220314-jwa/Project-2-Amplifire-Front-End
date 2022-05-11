import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { BookSearchPipe } from './pipes/book-search.pipe';
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { HomeComponent } from './components/home/home.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyBooksComponent,
    BookComponent,
    BooksComponent,
    BookSearchPipe,
    HomeComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
