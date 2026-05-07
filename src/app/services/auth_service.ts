import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal<boolean>(false);

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout() {
    this.isLoggedIn.set(false);
    this.router.navigate(['/']);
  }
}
