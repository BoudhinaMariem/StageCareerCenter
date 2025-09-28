import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-alt',
  templateUrl: './navbar-alt.component.html',
  styleUrls: ['./navbar-alt.component.css']
})
export class NavbarAltComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']); // redirige vers Home
  }
}
