import { DatabaseProvider } from './../../providers/database/database';
import { EditdepartamentoPage } from './../editdepartamento/editdepartamento';
import { AdddepartamentoPage } from './../adddepartamento/adddepartamento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { FormControl } from '@angular/forms';

/**
 * Generated class for the DepartamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-departamentos',
  templateUrl: 'departamentos.html',
})
export class DepartamentosPage {

  depa: any = [];
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sqlite: SQLite,
    public dataProvider: DatabaseProvider
   ) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.dataProvider.CreateDepartamento();
  }

  ionViewWillEnter(){
   this.getData();
  }


  onSearchInput(){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
      db.executeSql("SELECT * FROM Departamento WHERE DescripcionDep LIKE ?", ['%' + this.searchTerm + '%'])
      .then(res => {
        this.depa = [];
        for(var i=0; i<res.rows.length; i++) {
          this.depa.push({KeyDepartamento:res.rows.item(i).KeyDepartamento,DescripcionDep:res.rows.item(i).DescripcionDep})
        }
      })
    })
  }

  public getData(){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
      //db.executeSql('DROP TABLE Departamento')
      db.executeSql('CREATE TABLE IF NOT EXISTS Departamento(KeyDepartamento INTEGER PRIMARY KEY AUTOINCREMENT, DescripcionDep VARCHAR(100) NOT NULL)', [])
      .then(res => {
        //console.log('Execute SQL');      
        db.executeSql('SELECT COUNT(*) AS Cantidad FROM Departamento', []).then( datadepa => {
          let cant = parseInt(JSON.stringify(datadepa.rows.item(0).Cantidad));
          if (cant === 0){
            console.log('Insertar ' +  JSON.stringify(datadepa.rows.item(0).Cantidad) )
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['NUEVA SEGOVIA'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['JINOTEGA'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['MADRIZ'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['ESTELÍ'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['CHINANDEGA'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['LEÓN'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['MATAGALPA'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['BOACO'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['MANAGUA'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['MASAYA'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['CHONTALES'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['GRANADA'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['CARAZO'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['RIVAS'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['RÍO SAN JUAN'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['ATLÁNTICO NORTE'])
            db.executeSql('INSERT INTO Departamento VALUES(NULL,?)',['ATLÁNTICO SUR'])
          } else  {
            console.log('No Insertar')
          }
        })  
      })
      .catch(e => console.log(e));

      db.executeSql('SELECT * FROM Departamento ORDER BY KeyDepartamento ASC', [])
      .then(res => {
        this.depa = [];
        for(var i=0; i<res.rows.length; i++) {
          this.depa.push({KeyDepartamento:res.rows.item(i).KeyDepartamento,DescripcionDep:res.rows.item(i).DescripcionDep})
        }
      })
    });
  }
  
  addData() {
    this.navCtrl.push(AdddepartamentoPage);
  }

  editData(KeyDepartamento) {
    this.navCtrl.push(EditdepartamentoPage, {
      KeyDepartamento:KeyDepartamento
    });
  }

  deleteData(KeyDepartamento) {
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM Departamento WHERE KeyDepartamento=?', [KeyDepartamento])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

 


  
}
