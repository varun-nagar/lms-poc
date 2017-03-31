

import { Injectable } from "@angular/core";
import { User } from './user';

@Injectable()
export class AuthService {

    isValidUser(user: User): Promise<boolean> {
        let flag = false;
        if (user.email === 'varunsingh.nagar@globallogic.com' && user.password === '1234') {
            flag = true;
        }
        return Promise.resolve(flag);
    }

    isSessionActive(): boolean {
        return (localStorage.getItem('token')) ? true : false;
    }

    createUserSession(user: User): void {
        localStorage.setItem('token', 'varunsingh.nagar@globallogic.com1234')
    }

    removeUserSession(): void {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
        }
    }
}
