import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { EditMunicipioPage } from './../edit-municipio/edit-municipio';
import { AddMunicipioPage } from './../add-municipio/add-municipio';
import { FormControl } from '@angular/forms';

/**
 * Generated class for the MunicipiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-municipios',
  templateUrl: 'municipios.html',
})
export class MunicipiosPage {

  muni: any = [];
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public sqlite: SQLite) {
      this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.getData();
  }

  ionViewWillEnter() {
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
      db.executeSql('SELECT Municipio.KeyMunicipio, Municipio.DescripcionMun, Departamento.DescripcionDep FROM Departamento INNER JOIN Municipio ON Departamento.KeyDepartamento = Municipio.KeyDepartamento ORDER BY Municipio.KeyMunicipio', [])
      .then(res => {
        this.muni = [];
        for(var i=0; i<res.rows.length; i++) {
          this.muni.push({KeyMunicipio:res.rows.item(i).KeyMunicipio,KeyDepartamento:res.rows.item(i).DescripcionDep,DescripcionMun:res.rows.item(i).DescripcionMun})
        }
      })
    })
  }

  onSearchInput(){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
      db.executeSql("SELECT Municipio.KeyMunicipio, Municipio.DescripcionMun, Departamento.DescripcionDep FROM Departamento INNER JOIN Municipio ON Departamento.KeyDepartamento = Municipio.KeyDepartamento WHERE DescripcionMun LIKE ?", ['%' + this.searchTerm + '%'])
      .then(res => {
        this.muni = [];
        for(var i=0; i<res.rows.length; i++) {
          this.muni.push({KeyMunicipio:res.rows.item(i).KeyMunicipio,KeyDepartamento:res.rows.item(i).DescripcionDep,DescripcionMun:res.rows.item(i).DescripcionMun})
        }
      })
    })
  }

  public getData(){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
     //db.executeSql('DROP TABLE Municipio')
      db.executeSql('CREATE TABLE IF NOT EXISTS Municipio(KeyMunicipio INTEGER PRIMARY KEY AUTOINCREMENT, KeyDepartamento INTEGER NOT NULL, DescripcionMun VARCHAR(100) NOT NULL, FOREIGN KEY(KeyDepartamento) REFERENCES Departamento(KeyDepartamento))', [])
      .then(res => {
        db.executeSql('SELECT COUNT(*) AS Cantidad FROM Municipio', []).then( datamun => {
          let cant = parseInt(JSON.stringify(datamun.rows.item(0).Cantidad));
          if (cant === 0){
            console.log('Insertar ' +  JSON.stringify(datamun.rows.item(0).Cantidad) )
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'JALAPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'MURRA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'EL JÍCARO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'SAN FERNANDO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'MOZONTE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'DIPILTO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'MACUELIZO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'SANTA MARÍA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'OCOTAL'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'CIUDAD ANTIGUA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'QUILALÍ'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'WIWILI DE NUEVA SEGOVIA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[2, 'WIWILÍ'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[2, 'EL CÚA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[2, 'SAN JOSÉ BOCAY'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[2, 'STA. MARÍA DE PANTASMA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[2, 'SAN RAFAEL DEL NORTE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[2, 'SAN SEBASTIÁN DE YALÍ'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[2, 'LA CONCORDIA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[2, 'JINOTEGA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[3, 'SOMOTO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[3, 'TOTOGALPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[3, 'TELPANECA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[3, 'SAN JUAN DE RÍO COCO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[3, 'PALACAGÜINA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[3, 'YALAGÜINA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[3, 'SAN LUCAS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[3, 'LAS SABANAS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[3, 'SAN JOSÉ DE CUSMAPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[4, 'PUEBLO NUEVO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[4, 'CONDEGA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[4, 'ESTELÍ'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[4, 'SAN JUAN DE LIMAY'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[4, 'LA TRINIDAD'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[4, 'SAN NICOLÁS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'SAN PEDRO DEL NORTE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'SAN FRANCISCO DEL NORTE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'CINCO PINOS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'SANTO TOMÁS DEL NORTE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'EL VIEJO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'PUERTO MORAZÁN'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'SOMOTILLO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'VILLANUEVA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'CHINANDEGA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'EL REALEJO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'CORINTO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'CHICHIGALPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[5, 'POSOLTEGA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'ACHUAPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'EL SAUCE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'SANTA ROSA DEL PEÑÓN'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'EL JICARAL'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'LARREYNAGA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'TELICA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'QUEZALGUAQUE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'LEÓN'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'LA PAZ CENTRO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'NAGAROTE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'RANCHO GRANDE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'RÍO BLANCO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'EL TUMA - LA DALIA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'SAN ISIDRO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'SÉBACO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'MATAGALPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'SAN RAMÓN'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'MUY MUY'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'ESQUIPULAS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'SAN DIONISIO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'TERRABONA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[7, 'CIUDAD DARÍO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[8, 'SAN JOSÉ DE LOS REMATES'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[8, 'BOACO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[8, 'CAMOAPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[8, 'SANTA LUCÍA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[8, 'TEUSTEPE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[8, 'SAN  LORENZO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[9, 'SAN FRANCISCO LIBRE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[9, 'TIPITAPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[9, 'MATEARE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[9, 'VILLA EL CARMEN'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[9, 'CIUDAD SANDINO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[9, 'MANAGUA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[9, 'TICUANTEPE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[9, 'EL CRUCERO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[9, 'SAN RAFAEL DEL SUR'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[10, 'NINDIRÍ'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[10, 'MASAYA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[10, 'TISMA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[10, 'LA CONCEPCIÓN'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[10, 'MASATEPE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[10, 'NANDASMO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[10, 'CATARINA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[10, 'SAN JUAN DE ORIENTE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[10, 'NIQUINOHOMO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'COMALAPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'SAN FRANCISCO CUAPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'JUIGALPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'LA LIBERTAD'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'SANTO DOMINGO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'SANTO TOMÁS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'SAN PEDRO DE LÓVAGO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'ACOYAPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'VILLA SANDINO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'EL CORAL'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[12, 'DIRIÁ'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[12, 'DIRIOMO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[12, 'GRANADA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[12, 'NANDAIME'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[13, 'SAN MARCOS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[13, 'JINOTEPE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[13, 'DOLORES'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[13, 'DIRIAMBA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[13, 'EL ROSARIO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[13, 'LA PAZ DE CARAZO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[13, 'SANTA TERESA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[13, 'LA CONQUISTA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'TOLA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'BELÉN'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'POTOSÍ'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'BUENOS AIRES'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'MOYOGALPA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'ALTAGRACIA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'SAN JORGE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'RIVAS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'SAN JUAN DEL SUR'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'CÁRDENAS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[15, 'MORRITO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[15, 'EL ALMENDRO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[15, 'SAN MIGUELITO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[15, 'SAN CARLOS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[15, 'EL CASTILLO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[15, 'SAN JUAN DEL NICARAGUA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[16, 'WASPÁN'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[16, 'PUERTO CABEZAS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[16, 'ROSITA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[16, 'BONANZA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[16, 'WASLALA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[16, 'MULUKUKU'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[16, 'SIUNA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[16, 'PRINZAPOLKA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'PAIWAS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'LA CRUZ DE RÍO GRANDE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'DESEMBOC. DE RÍO GRANDE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'LAGUNA DE PERLAS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'EL TORTUGUERO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'RAMA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'EL AYOTE',])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'MUELLE DE LOS BUEYES'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'KUKRA - HILL'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'CORN ISLAND'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'BLUEFIELDS'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[17, 'NUEVA GUINEA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[3, 'MALPAISILLO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[14, 'OMETEPE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[10, 'LA CONCHA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[6, 'PONELOYA'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[15, 'TULE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[8, 'TECOLOSTOTE'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[8, 'SAN LORENZO'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[4, 'SAN RAMON'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[1, 'SUSUCAYAN'])
            db.executeSql('INSERT INTO Municipio VALUES(NULL,?,?)',[11, 'CHONTALES'])           
          } else  {
            console.log('No Insertar')
          }
        })
      })
      .catch(e => console.log(e));
     // db.executeSql('SELECT * FROM Municipio ORDER BY KeyMunicipio DESC', [])
      db.executeSql('SELECT Municipio.KeyMunicipio, Municipio.DescripcionMun, Departamento.DescripcionDep FROM Departamento INNER JOIN Municipio ON Departamento.KeyDepartamento = Municipio.KeyDepartamento ORDER BY Municipio.KeyMunicipio', [])
      .then(res => {
        this.muni = [];
        for(var i=0; i<res.rows.length; i++) {
          this.muni.push({KeyMunicipio:res.rows.item(i).KeyMunicipio,KeyDepartamento:res.rows.item(i).DescripcionDep,DescripcionMun:res.rows.item(i).DescripcionMun})
        }
      })
    });
  }
  
  addData() {
    this.navCtrl.push(AddMunicipioPage);
  }

  editData(KeyMunicipio) {
    this.navCtrl.push(EditMunicipioPage, {
      KeyMunicipio:KeyMunicipio
    });
  }

  deleteData(KeyMunicipio) {
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM Municipio WHERE KeyMunicipio=?', [KeyMunicipio])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

}
