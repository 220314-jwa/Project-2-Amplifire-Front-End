import { Injectable } from '@angular/core';
import { Users } from '../models/users'; 


@Injectable({
  providedIn: 'root'
})
export class UserService {
 url: string = 'http://localhost:8080/';

  constructor() { }

  async checkLogin(): Promise<Users> {
    let userId = sessionStorage.getItem('Auth-Token');
    let httpResp = await fetch(this.url + 'users/' + userId);
    if (httpResp && httpResp.status === 200) {
        return await httpResp.json();
    } else {
      return null;
    }
  }

  async logIn(credentials:any): Promise<Users> {
    let credentialJSON = JSON.stringify(credentials);

    let httpResp = await fetch(this.url + 'auth',
        {method:'POST', body:credentialJSON});
    if (httpResp && httpResp.status === 200) {
        let user = await httpResp.json();
        sessionStorage.setItem('Auth-Token', user.id.toString());
        return user;
    }
  }
}
