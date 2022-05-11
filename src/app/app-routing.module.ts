import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'books', component:BooksComponent},
  {path:'mybooks',component:MyBooksComponent},
  {path:"login",component:LoginComponent},
  // {path: '', redirectTo: 'home', pathMatch : 'full'} // when is empty dir to login page
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
