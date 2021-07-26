import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {Observable} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
    message$!: Observable<any>;
    user$!: Observable<any>;

    constructor(public authService: AuthService,
                public router: Router) {
    }

    setMessage() {
        // this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    ngOnInit() {
      this.user$ = this.authService.getUser();

      this.message$ = this.authService.getHello('Test');

    }

    onSubmit() {
        // this.message = 'Trying to log in ...';

        /*this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/dashboard';

                // Redirect the user
                this.router.navigateByUrl(redirect);
            }
        });*/
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }

}
