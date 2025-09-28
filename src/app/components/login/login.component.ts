import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  remember = false;

  constructor(private router: Router) {}

  login() {
    const e = this.email.toLowerCase();

    if (!this.email || !this.password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // Redirection selon le type d’utilisateur
    if (e.includes('seo')) {
      this.router.navigate(['/overview']);
    } else if (e.includes('student')) {
      this.router.navigate(['/student']);
    } else if (e.includes('alumni')) {
      this.router.navigate(['/alumni']);
    } else {
      alert('Identifiant invalide. Utilisez un email contenant "seo", "student" ou "alumni".');
    }
  }
}
