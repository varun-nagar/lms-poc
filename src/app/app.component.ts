import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'my-app',
  template: `
 <router-outlet></router-outlet>
  `,
  providers: [AuthService]
})

export class AppComponent implements OnDestroy {

  constructor(private authService: AuthService) { }

  ngOnDestroy(): void {
    this.authService.removeUserSession();
  }
}
