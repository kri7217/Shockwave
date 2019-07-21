import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  mailAddr: string;
  dateOfBirth: Date;
  password: string;

  ngOnInit() {
  }
  onSubmit(dateOfBirth, password, mailAddr) {
    let user = {
      mail: mailAddr,
      DoB: dateOfBirth,
      Password: password
    }
    this.authService.registerUser({ email: mailAddr, password: password })
    console.log(user)
  }


}
