import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams
   ) {
    
  }

  ionViewDidLoad() {
    
  }


}
