import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { FormControl } from '@angular/forms';

import { EditTecnicoPage } from './../edit-tecnico/edit-tecnico';
import { AddTecnicoPage } from './../add-tecnico/add-tecnico';
/**
 * Generated class for the TecnicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tecnico',
  templateUrl: 'tecnico.html',
})
export class TecnicoPage {

  tecnico: any = [];
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public sqlite: SQLite) {
      this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.getData();
  }

  ionViewWillEnter() {
    this.getData();
  }

  onSearchInput(){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
      db.executeSql("SELECT * FROM Tecnico WHERE Name LIKE ?", ['%' + this.searchTerm + '%'])
      .then(res => {
        this.tecnico = [];
        for(var i=0; i<res.rows.length; i++) {
          this.tecnico.push({KeyTecnico:res.rows.item(i).KeyTecnico,Name:res.rows.item(i).Name})
        }
      })
    })
  }

  public getData(){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
      //db.executeSql('DROP TABLE Tecnico')
      db.executeSql('CREATE TABLE IF NOT EXISTS Tecnico(KeyTecnico VARCHAR(5) PRIMARY KEY, Name VARCHAR(100) NOT NULL)', [])
      .then(res => console.log('Execute SQL Tecnico'))
      .catch(e => console.log(e));

      db.executeSql('SELECT * FROM Tecnico ORDER BY KeyTecnico ASC', [])
      .then(res => {
        this.tecnico = [];
        for(var i=0; i<res.rows.length; i++) {
          this.tecnico.push({KeyTecnico:res.rows.item(i).KeyTecnico,Name:res.rows.item(i).Name})
        }
      })
    });
  }
  
  addData() {
    this.navCtrl.push(AddTecnicoPage);
  }

  editData(KeyTecnico) {
    this.navCtrl.push(EditTecnicoPage, {
      KeyTecnico:KeyTecnico
    });
  }

  deleteData(KeyTecnico) {
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM Tecnico WHERE KeyTecnico=?', [KeyTecnico])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

}
