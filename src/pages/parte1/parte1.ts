import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Parte1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parte1',
  templateUrl: 'parte1.html',
})
export class Parte1Page {
  public a = 1
  public b = 4
  public c = 4
  public d= 0
  public e =7


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Parte1Page');
     var max_cinco = [this.a, this.b, this.c, this.d, this.e];
     max_cinco.sort(function(a, b) {
       return b-a;

     });
     console.log(max_cinco);
     console.log(max_cinco[0], max_cinco[1], max_cinco[2]);

     var cuadratica = [this.a, this.b, this.c];
     var disc = (this.b*this.b-(4*this.a*this.c));
     if(disc>0){
  var x1=(-this.b-Math.sqrt(disc))/(2*this.a);
  var x2=(-this.b+Math.sqrt(disc))/(2*this.a);
  
   
  console.log("el resultado es ",  x1.toFixed , x2.toFixed);
  }
  else{
    console.log("el discriminate es menor que 0")
  }
 }
     }


  
    
     
  
    
    
  

  

