import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ChartOptions } from "./interface/ChartOptions";

@Component({
    selector: 'dashboard',
    template: `
    <div class="col-lg-6 col-lg-offset-3">
        <h1>
            {{title}}
        </h1>
        <div class="btn btn-primary" (click)="signOut()" >sign out</div>

        <chart [options] = optionVal ></chart>
    </div>
  `
})

export class DashboardComponent implements OnInit {

    private title: string;
    private optionVal: ChartOptions;

    constructor(private router: Router, private authService: AuthService) {
        this.title = 'Welcome To LMS Dashboard';
    }

    ngOnInit(): void {
        if (!this.authService.isSessionActive()) {
            this.router.navigate(['login']);
        } else {
            this.optionVal = {
                height: 400,
                width: 900,
                type: 'bar'
            }
        }
    }

    signOut(): void {
        this.authService.removeUserSession();
        this.router.navigate(['login']);
    }
}
