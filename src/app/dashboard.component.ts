import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    template: `
    <div class="col-lg-6 col-lg-offset-3">
        <h1>
            {{title}}
        </h1>
        <div class="btn btn-primary" (click)="signOut()" >sign out</div>
    </div>
  `
})

export class DashboardComponent implements OnInit {

    private title: string;

    constructor(private router: Router, private authService: AuthService) {
        this.title = 'Welcome To LMS Dashboard';
    }

    ngOnInit(): void {
        if (!this.authService.isSessionActive()) {
            this.router.navigate(['login']);
        }
    }

    signOut(): void {
        this.authService.removeUserSession();
        this.router.navigate(['login']);
    }
}
