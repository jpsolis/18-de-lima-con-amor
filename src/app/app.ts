import { Component } from '@angular/core';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Reviews } from './sections/reviews/reviews';
import { Services } from './sections/services/services';
import { WhatsappFab } from './sections/whatsapp-fab/whatsapp-fab';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Services, Reviews, Contact, Footer, WhatsappFab],
  templateUrl: './app.html',
})
export class App {}
