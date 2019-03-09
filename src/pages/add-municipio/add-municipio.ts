import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the AddMunicipioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-municipio',
  templateUrl: 'add-municipio.html',
})
export class AddMunicipioPage {

  data = { description:"" };
  departamento: any = [];
  selectedDepartamento: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMunicipioPage');
    this.cargarDepa();
  }

  cargarDepa(){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
      db.executeSql('SELECT * FROM Departamento ORDER BY KeyDepartamento ASC', [])
      .then(res => {
        this.departamento = [];
        for(var i=0; i<res.rows.length; i++) {
          this.departamento.push({KeyDepartamento:res.rows.item(i).KeyDepartamento,DescripcionDep:res.rows.item(i).DescripcionDep})
        }
      });
    });
  }

  saveData() {
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[this.selectedDepartamento, this.data.description])
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
