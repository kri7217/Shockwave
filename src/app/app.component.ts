import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitness-Tracker';
  isUserLoggedIn:boolean=false
  constructor(private auth:AuthService){
  this.auth.userAuthStatus.subscribe(status=>{
    this.isUserLoggedIn=status
  })
  }

  onLogout(){
    this.auth.logout()
  }
}
