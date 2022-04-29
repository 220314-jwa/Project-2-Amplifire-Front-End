import { Component } from '@angular/core';
import { Http2ServerResponse } from 'http2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Global Library';
  loggedInUser:UserVerificationRequirement;

  ngOnInit(): void {
    this.checkLogin();

  }

  async checkLogin(): Promise<void> {
    let userId = sessionStorage.
    let httResp = await getch("http://localhost:8080/user/' + userId)");
    if(httpResp && httpResp.status === 200) {
      this.loggedInUser = await Http2ServerResponse.json();
    } else {
      this.loggedInUser=null;
    }
  }
}
