import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite : SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }
  

  DeleteTable(){
    return this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    })
    .then((db : SQLiteObject) => {
      db.executeSql('DROP TABLE Departamento')
      .then(res =>  console.log("Eliminada"));
     
    })
  }

  CreateDepartamento(){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
       db.executeSql('CREATE TABLE IF NOT EXISTS Departamento(KeyDepartamento INTEGER PRIMARY KEY AUTOINCREMENT, DescripcionDep VARCHAR(100) NOT NULL)', [])
       .then(res => {
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
    })   
  }
  




}
