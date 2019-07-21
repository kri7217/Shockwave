import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServuce:AuthService) { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    console.log(f)
  let loggedUser =this.authServuce.login({
   email:f.value['mail'],
   password:f.value['password']
 })

 console.log(loggedUser)
  }

}
