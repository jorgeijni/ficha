import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
/**
/**
 * Generated class for the AddTecnicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-tecnico',
  templateUrl: 'add-tecnico.html',
})
export class AddTecnicoPage {

  data = { KeyTecnico:"", Name:"" };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTecnicoPage');
  }

  setCodigoUpperCase(texto) {
    this.data.KeyTecnico = texto.toUpperCase();
  }

  setNameUpperCase(texto) {
    this.data.Name = texto.toUpperCase();
  }

  saveData() {
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO Tecnico VALUES(?,?)',[this.data.KeyTecnico, this.data.Name])
        .then(res => {
          console.log(res);
          this.toast.show('Data saved', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.popToRoot();
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
}
