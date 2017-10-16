import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Parte3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parte3',
  templateUrl: 'parte3.html',
})
export class Parte3Page {
  public a = 2;
  public b =4;
  public c =3;
  public disc;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Parte3Page');
  }
 cuadratica(a,b,c){
   
   var disc = (b*b-4*a*c);
  if (disc>0 ){
  var x1=(-b-Math.sqrt(disc))/(2*a);
  var x2=(-b+Math.sqrt(disc))/(2*a);
  
   
  console.log(x1 , x2);
  }
  else{
    console.log(disc)
  }
 }
 
}
