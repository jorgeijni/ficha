import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { FormControl } from '@angular/forms';
import { AddFichaPage } from './../add-ficha/add-ficha';
import { EditFichaPage } from './../edit-ficha/edit-ficha';
/**
 * Generated class for the FichaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ficha',
  templateUrl: 'ficha.html',
})
export class FichaPage {

  Fichas: any = [];
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public sqlite: SQLite,
   ) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.getData();
  }

  ionViewWillEnter(){
    this.getData();
  }

  onSearchInput(){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
      db.executeSql("SELECT KeyFicha, NombreProductor FROM Ficha WHERE NombreProductor LIKE ?", ['%' + this.searchTerm + '%'])
      .then(res => {
        this.Fichas = [];
        for(var i=0; i<res.rows.length; i++) {
          this.Fichas.push({KeyFicha:res.rows.item(i).KeyFicha, NombreProductor:res.rows.item(i).NombreProductor})
        }
      })
    })
  }

  getData(){
    let cadena = "CREATE TABLE IF NOT EXISTS Ficha(KeyFicha INTEGER PRIMARY KEY AUTOINCREMENT, Departamento VARCHAR(50), " + 
                "Municipio VARCHAR(100), Comunidad VARCHAR(150), Tecnico VARCHAR(50), Fecha VARCHAR(10), Direccion VARCHAR (200), " +
                "UTMX VARCHAR(20), UTMY VARCHAR(20), NombreProductor VARCHAR(120), TipoDocumento VARCHAR(25), NoDocumento VARCHAR(16), " +
                "Edad VARCHAR(3), Sexo VARCHAR(10), NoPersonas VARCHAR(3), Telefono1 VARCHAR(12), Telefono2 VARCHAR(12), AreaFinca VARCHAR(5), " +
                "Pregunta15 VARCHAR(50), Pregunta15A VARCHAR(50), Pregunta16 VARCHAR(50), Pregunta17 TEXT, Pregunta18 VARCHAR(5), " +
                "Pregunta18A VARCHAR(5), Pregunta18B VARCHAR(5), Pregunta18C VARCHAR(5), Pregunta18D VARCHAR(5), Pregunta19 VARCHAR(5), " +
                "Pregunta19A VARCHAR(5), Pregunta19B VARCHAR(5), Pregunta19C VARCHAR(5), Pregunta19D VARCHAR(5), Pregunta19E VARCHAR(5), " +
                "Pregunta19F VARCHAR(5), Pregunta20 VARCHAR(2), Pregunta21 VARCHAR(5), Pregunta21A VARCHAR(5), Pregunta21B VARCHAR(5), " +
                "Pregunta21C VARCHAR(5), Pregunta22 VARCHAR(30), Pregunta23 TEXT, Pregunta24 VARCHAR(2), Pregunta25 VARCHAR(3), Pregunta26 VARCHAR(15), " +
                "Pregunta27 VARCHAR(150), Pregunta28 VARCHAR(2), Pregunta29 VARCHAR(25), Pregunta30 VARCHAR(15), Pregunta31 VARCHAR(30), " + 
                "Pregunta32 VARCHAR(25), Pregunta33 VARCHAR(25), Pregunta34 VARCHAR(35), Pregunta35 VARCHAR(25), Pregunta36 VARCHAR(30), " +
                "Pregunta37 VARCHAR(30), Pregunta38 VARCHAR(2), Pregunta39 VARCHAR(20), Pregunta40 VARCHAR(16), Pregunta41 VARCHAR(25), " +
                "Pregunta42 VARCHAR(30), Pregunta43 VARCHAR(25), Pregunta44 VARCHAR(2), Pregunta45 VARCHAR(16), Pregunta46 VARCHAR(16), " +
                "Pregunta47 VARCHAR(21), Pregunta48 VARCHAR(30), Pregunta48A VARCHAR(150), Pregunta49 VARCHAR(16), Pregunta50 VARCHAR(30), " +
                "Pregunta50A VARCHAR(6), Pregunta50B TEXT, Observable1 VARCHAR(150), Observable2 VARCHAR(10), Observable3 VARCHAR(10), " + 
                "Observable4 TEXT, Foto1 TEXT, Foto2 TEXT, Foto3 TEXT, Foto4 TEXT, Valoracion TEXT) " 
                /*"FOREIGN KEY(KeyDepartamento) REFERENCES Departamento(KeyDepartamento), " +
                "FOREIGN KEY(KeyMunicipio) REFERENCES Municipio(KeyMunicipio) )";*/

    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
      db.executeSql(cadena, [])     
     .then(res => console.log("Execute SQL"))
      .catch(e => console.log(e));

      db.executeSql('SELECT KeyFicha, NombreProductor FROM Ficha ORDER BY KeyFicha ASC', [])
      .then(res => {
        this.Fichas = [];
        for(var i=0; i<res.rows.length; i++) {
          this.Fichas.push({KeyFicha:res.rows.item(i).KeyFicha, NombreProductor:res.rows.item(i).NombreProductor})
        }
      })
      .catch(e => console.log(e))
    })    
  }

  addData() {
    this.navCtrl.push(AddFichaPage);
  }

  editData(KeyFicha) {
    this.navCtrl.push(EditFichaPage, {
      KeyFicha:KeyFicha
    });
  }

  deleteData(KeyFicha) {
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM Ficha WHERE KeyFicha=?', [KeyFicha])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }


}
