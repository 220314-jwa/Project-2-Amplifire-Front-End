import { Observable } from 'rxjs';

import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationForm!: FormGroup;
  user= {username:'',
    password:'',
    fullName:''
  };
  @Output() submit: EventEmitter<any> = new EventEmitter();
  validMessage: string='';

  newUser: any;


  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.userRegistrationForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      fullName: new FormControl('',Validators.required)

    });
  }

  submitRegistration(){
    if (this.userRegistrationForm.valid){
      this.validMessage= "Thank you " + this.user.fullName +"."+ "You have been successfully registerd"
    this.userServ.addUser(this.userRegistrationForm.value).subscribe( data => {
      this.userRegistrationForm.reset(); 
       return true;
    },
     
     
    )
  
    }else{ this.validMessage="please fillout form properly"}

  }

}
