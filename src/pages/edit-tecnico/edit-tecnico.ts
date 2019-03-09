import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the EditTecnicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-tecnico',
  templateUrl: 'edit-tecnico.html',
})
export class EditTecnicoPage {
  
  data = { KeyTecnico:"", Name:"" };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private sqlite: SQLite,
    private toast: Toast) {
      this.getCurrentData(navParams.get("KeyTecnico")); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTecnicoPage');
  }

  setCodigoUpperCase(texto) {
    this.data.KeyTecnico = texto.toUpperCase();
  }

  setNameUpperCase(texto) {
    this.data.Name = texto.toUpperCase();
  }

  getCurrentData(KeyTecnico) {
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM Tecnico WHERE KeyTecnico=?', [KeyTecnico])
        .then(res => {
          if(res.rows.length > 0) {
            this.data.KeyTecnico = res.rows.item(0).KeyTecnico;         
            this.data.Name = res.rows.item(0).Name;          
          }
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

  updateData() {
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('UPDATE Tecnico SET Name=? WHERE KeyTecnico=?',[this.data.Name,this.data.KeyTecnico])
        .then(res => {
          console.log(res);
          this.toast.show('Data updated', '5000', 'center').subscribe(
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
