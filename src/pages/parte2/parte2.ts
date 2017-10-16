import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Parte2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parte2',
  templateUrl: 'parte2.html',
})
export class Parte2Page {
  name: string = "tictac"; 
  resistencia: number = 100;
  restarResistencia: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, name:string, resistencia: number, restarResistencia:any) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad Parte2Page');
  }

}

  



