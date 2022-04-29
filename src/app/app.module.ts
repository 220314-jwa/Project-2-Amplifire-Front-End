import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from './piper/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    UsersComponent,
    LoginComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // for ngModel two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
