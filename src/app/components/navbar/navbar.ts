import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth_service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  isOpen = false;
  auth = inject(AuthService);

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
