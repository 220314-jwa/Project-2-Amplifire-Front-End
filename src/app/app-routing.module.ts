import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { UsersComponent } from './users/users.component';
import { LibraryComponent } from './library/library.component';

  const routes: Routes = [
    {path: 'login', component: LoginComponent },

    {path: 'mybooks', component: UsersComponent },

    {path: 'library', component: LibraryComponent}
  ]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
  
})
export class AppRoutingModule { }
