import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the EditdepartamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editdepartamento',
  templateUrl: 'editdepartamento.html',
})
export class EditdepartamentoPage {

  data = { KeyDepartamento:0, description:"" };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {
      this.getCurrentData(navParams.get("KeyDepartamento"));      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditdepartamentoPage');
  }

  getCurrentData(KeyDepartamento) {
    console.log("Estas en update " + KeyDepartamento);
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM Departamento WHERE KeyDepartamento=?', [KeyDepartamento])
        .then(res => {
          if(res.rows.length > 0) {
            this.data.KeyDepartamento = res.rows.item(0).KeyDepartamento;         
            this.data.description = res.rows.item(0).DescripcionDep;          
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
      db.executeSql('UPDATE Departamento SET DescripcionDep=? WHERE KeyDepartamento=?',[this.data.description,this.data.KeyDepartamento])
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
