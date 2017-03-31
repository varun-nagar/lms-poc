import { Component } from '@angular/core';
import { User } from './User';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'login-form',
    templateUrl: `./login.component.html`,
})
export class LoginComponent {

    private err: string;
    private user: User;

    constructor(private router: Router, private authService: AuthService) {
        this.err = '';
        this.user = new User();
    }

    ngOnInit(): void {
        if (this.authService.isSessionActive()) {
            this.router.navigate(['dashboard']);
        }
    }

    validateUser(event: any): void {
        event.preventDefault();

        if ((this.user.email !== undefined && this.user.email !== '') && (this.user.password !== undefined && this.user.password !== '')) {

            this.authService.isValidUser(this.user).then(validated => {
                if (validated) {
                    // navigate to welcome dashboard.
                    this.authService.createUserSession(this.user);
                    this.router.navigate(['dashboard']);
                } else {
                    // show error message.
                    this.showError('not a valid user.');
                }
            })

        } else {
            // show error message.            
            this.showError('please provide user credentials.');
        }
    }

    showError(msg: string): void {
        this.err = msg;
    }
}
