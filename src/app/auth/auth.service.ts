import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AuthData {
    email: string
    password: string
}

export interface User {
    email: string
    userId: string
}
@Injectable({
    providedIn:'root'
})
export class AuthService {
    userAuthStatus= new Subject<boolean>()
    user: User;

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: '12345qwerty'
        }
    }

    login(authData: AuthData):User{
        this.userAuthStatus.next(true)
          this.user = {
            email: authData.email,
            userId: '12345qwerty'
        }
        return {...this.user};
    }

    logout(){
        this.user = null;
        this.userAuthStatus.next(false)
    }
}