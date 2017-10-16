import { Component } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  parte1(){
    var t: Tabs = this.navCtrl.parent;
    t.select(1);
  }

  parte2(){
    var t: Tabs = this.navCtrl.parent;
    t.select(2);
  }

  parte3(){
    var t: Tabs = this.navCtrl.parent;
    t.select(3);
  }

}
