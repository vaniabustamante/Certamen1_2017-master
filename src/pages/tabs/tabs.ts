import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { Parte3Page } from './../parte3/parte3';
import { Parte2Page } from './../parte2/parte2';
import { Parte1Page } from './../parte1/parte1';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Parte1Page;
  tab3Root = Parte2Page;
  tab4Root = Parte3Page;

  constructor() {

  }
}
