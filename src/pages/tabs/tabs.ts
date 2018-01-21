import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { BookingPage } from '../booking/booking';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BookingPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
