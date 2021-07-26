import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public redirectUrl: string | undefined;
    public isLoggedIn = false;

    constructor(public router: Router, private httpClient: HttpClient) {
    }

    getUser() {
      return this.httpClient.get('.auth/me');
    }
/*    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = true)
        );
    }*/

    logout(): void {
        this.isLoggedIn = false;
        this.router.navigate([ '/login' ]);
    }
}
