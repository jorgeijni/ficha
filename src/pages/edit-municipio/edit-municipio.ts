import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
/**
 * 
/**
 * Generated class for the EditMunicipioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-municipio',
  templateUrl: 'edit-municipio.html',
})
export class EditMunicipioPage {

  data = { KeyMunicipio:0, KeyDepartamento:0, description:"" };
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {
      this.getCurrentData(navParams.get("KeyMunicipio"));   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditMunicipioPage');
  }

  getCurrentData(KeyMunicipio) {
    console.log("Estas en update " + KeyMunicipio);
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM Municipio WHERE KeyMunicipio=?', [KeyMunicipio])
        .then(res => {
          if(res.rows.length > 0) {
            this.data.KeyMunicipio = res.rows.item(0).KeyMunicipio;         
            this.data.KeyDepartamento = res.rows.item(0).KeyDepartamento;         
            this.data.description = res.rows.item(0).DescripcionMun;          
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
      db.executeSql('UPDATE Municipio SET DescripcionMun=? WHERE KeyMunicipio=?',[this.data.description,this.data.KeyMunicipio])
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
