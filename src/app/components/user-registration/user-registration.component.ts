import { Users } from './../../models/users';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationForm!: FormGroup;
  user = {username:'',
    password:'',
    fullName:''
  };
  validMessage: string='';

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.userRegistrationForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      fullName: new FormControl('',Validators.required)

    });
  }

  submitRegistration(){}

}
