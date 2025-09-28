import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  contact = {
    fullname: '',
    email: '',
    message: ''
  };

  submitContact() {
    if (this.contact.fullname && this.contact.email && this.contact.message) {
      // Récupérer anciens messages
      let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      contacts.push({ ...this.contact, date: new Date() });
      localStorage.setItem('contacts', JSON.stringify(contacts));

      alert('Merci pour votre message ! Nous vous répondrons bientôt.');
      this.contact = { fullname: '', email: '', message: '' };
    } else {
      alert('Veuillez remplir tous les champs avant de soumettre.');
    }
  }
}
