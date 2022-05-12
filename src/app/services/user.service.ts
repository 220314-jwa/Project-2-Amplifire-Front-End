import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:8080/';
  headers = {'Content-type':'application/json',
  'Access-Control-Allow-Origin': '*'

};


  constructor() { }

   async checkLogin(): Promise<any> {
     let userId = sessionStorage.getItem('Auth-Token');
     let httpResp = await fetch(this.url + 'users/' + userId, {headers:this.headers});
     if (httpResp && httpResp.status === 200) {
         return await httpResp.json();
      } else {
        return undefined;
      }
   }

   async logIn(credentials:any): Promise<User | undefined> {
   //async logIn(credentials:any): Promise<User | null> {
     
   try{
    let credentialJSON = JSON.stringify(credentials);

    let httpResp = await fetch(this.url + 'auth',
        {method:'POST', body:credentialJSON, headers:this.headers});
    if (httpResp && httpResp.status === 200) {
        let user = await httpResp.json();
        sessionStorage.setItem('Auth-Token', user.id.toString());
        return user;
    }
   }catch(error){
     console.error(error);
   }
    return undefined;
   }

   submitRegistration(user:any){}
  
}
