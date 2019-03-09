import { TecnicoPage } from './../tecnico/tecnico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

/**
 * Generated class for the AddFichaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-ficha',
  templateUrl: 'add-ficha.html',
})
export class AddFichaPage {

  mymodel: any;

  ficha : any ={Pregunta1:"", Pregunta2:"", Pregunta3:"", Pregunta4:"", Pregunta5:"", Pregunta6:"", Pregunta7X:"", Pregunta7Y:"",
                Pregunta8:"", Pregunta9:"", Pregunta9A:"", Pregunta10:"", Pregunta11:"", Pregunta12:"", Pregunta13:"", Pregunta13A:"", 
                Pregunta14:"", Pregunta15:"",  Pregunta15A:"", Pregunta16:"", Pregunta16A:"", Pregunta17:"", Pregunta18:"", 
                Pregunta18A:"", Pregunta18B:"", Pregunta18C:"", Pregunta18D:"", Pregunta19:"", Pregunta19A:"", Pregunta19B:"", Pregunta19C:"", 
                Pregunta19D:"", Pregunta19E:"", Pregunta19F:"", Pregunta20:"", Pregunta21:"", Pregunta21A:"", Pregunta21B:"", Pregunta21C:"", 
                Pregunta23:"", Pregunta24:"", Pregunta25:"", Pregunta26:"", Pregunta27:"", Pregunta28:"", Pregunta29:"", Pregunta30:"", 
                Pregunta31:"", Pregunta32:"", Pregunta33:"", Pregunta34:"", Pregunta35:"", Pregunta36:"", Pregunta37:"", Pregunta38:"", 
                Pregunta39:"", Pregunta40:"", Pregunta41:"", Pregunta42:"", Pregunta42A:"", Pregunta43:"",  Pregunta44:"", Pregunta45:"", 
                Pregunta46:"", Pregunta47:"", Pregunta48:"", Pregunta48A:"", Pregunta49:"",  Pregunta50:"", Pregunta50A:"", Pregunta50B:"",
                Observable1:"", Observable2:"", Observable3:"", Observable4:"", Foto1:"",	Foto2:"",	Foto3:"",	Foto4:"", Valoracion:""};

  departamento: any = [];
  municipio: any = [];

  numvaloracion: any = 0;
 
  Pregunta9: any = [{label:"Cédula", value:"Cédula"},
                    {label:"Documento Supletorio", value:"Documento Supletorio"},
                    {label:"Pasaporte", value:"Pasaporte"}];

  Pregunta11: any = [{label:"Masculino", value:"Masculino"},{label:"Femenino", value:"Femenino"}];

  Pregunta15: any = [{label:"Con Escritura pública", value:"Con Escritura pública"},
                    {label:"Sin Escritura", value:"Sin Escritura"},
                    {label:"Escritura Privada", value:"Escritura Privada"},
                    {label:"Titulo público", value:"Titulo público"},
                    {label:"Declaratoria de heredero", value:"Declaratoria de heredero"},
                    {label:"En litigio", value:"En litigio"},
                    {label:"Otra Forma de Tenencia", value:"Otra Forma de Tenencia"}];

  Pregunta16: any = [{label:"Agricultura", value:"Agricultura"},
                  {label:"Ganadería", value:"Ganadería"},
                  {label:"Otro", value:"Otro"}];

  Pregunta17: any = [{label:"Río Permanente", value:"Río Permanente"}, 
                  {label:"Río Temporal", value:"Río Temporal"},
                  {label:"Quebrada Permanente", value:"Quebrada Permanente"},
                  {label:"Quebrada Temporal", value:"Quebrada Temporal"},
                  {label:"Ojo de agua Permanente", value:"Ojo de agua Permanente"},
                  {label:"Ojo de agua Temporal", value:"Ojo de agua Temporal"},
                  {label:"Pozo excavado Permanente", value:"Pozo excavado Permanente"},
                  {label:"Pozo excavado Temporal", value:"Pozo excavado Temporal"},
                  {label:"Pozo perforado Permanente", value:"Pozo perforado Permanente"},
                  {label:"Pozo perforado Temporal", value:"Pozo perforado Temporal"},
                  {label:"Cosecha de agua Permanente", value:"Cosecha de agua Permanente"},
                  {label:"Cosecha de agua Temporal", value:"Cosecha de agua Temporal"}];
  
  Pregunta20: any = [{label:"Si", value:"Si"},
                  {label:"No", value:"No"}];

  Pregunta22: any =[{label:"Organización comunitaria", value:"Organización comunitaria"},
                  {label:"Asociación gremial", value:"Asociación gremial"},
                  {label:"Otras", value:"Otras"}];
   
  Pregunta23: any = [{label:"Productivos", value:"Productivos"},
                  {label:"Comercialización", value:"Comercialización"},
                  {label:"Gestión del agua", value:"Gestión del agua"},
                  {label:"Desarrollo comunitario", value:"Desarrollo comunitario"},
                  {label:"Otros", value:"Otros"}];       
  
  Pregunta25: any = [{label:"Franco arcillosa a arcillosa", value:"Franco arcillosa a arcillosa"}, 
                  {label:"Franco arenosa limoso", value:"Franco arenosa limoso"}];

  Pregunta26: any = [{label:"Menos de 5%", value:"Menos de 5%"},
                  {label:"5-15%", value:"5-15%"},
                  {label:"Más de 15%", value:"Más de 15%"}];
  
  Pregunta27: any = [{label:"Agrícola", value:"Agrícola"},
                  {label:"Pecuario", value:"Pecuario"},
                  {label:"Forestal", value:"Forestal"},
                  {label:"Otro", value:"Otro"}];

  Pregunta29: any = [{label:"Arriba o a los lados de la obra", value:"Arriba o a los lados de la obra"},
                  {label:"Abajo de la obra", value:"Abajo de la obra"}];
 
  Pregunta30: any = [{label:"Más de 2 mz", value:"Más de 2 mz"},
                  {label:"Menos de 2 mz", value:"Menos de 2 mz"}];

  Pregunta31: any = [{label:"Corriente superficial efímera y poco erosiva", value:"Corriente superficial efímera y poco erosiva"},
                  {label:"Corriente efímera y erosiva", value:"Corriente efímera y erosiva"}];

  Pregunta33: any = [{label:"Alrededor de la obra", value:"Alrededor de la obra"},
                  {label:"Aguas Arriba", value:"Aguas Arriba"},
                  {label:"Aguas Abajo", value:"Aguas Abajo"},
                  {label:"No Hay", value:"No Hay"}];

  Pregunta34: any = [{label:"Deslizamiento", value:"Deslizamiento"},
                  {label:"Inundación", value:"Inundación"},
                  {label:"Sismos", value:"Sismos"},
                  {label:"No Hay", value:"No Hay"},
                  {label:"Otros", value:"Otros"}];

  Pregunta36: any = [{label:"Obra de cierre Mecanizada", value:"Obra de cierre Mecanizada"},
                  {label:"Obra de cierre no Mecanizada", value:"Obra de cierre no Mecanizada"},
                  {label:"Obra excavada Mecanizada", value:"Obra excavada Mecanizada"},
                  {label:"Obra excavada no Mecanizadaos", value:"Obra excavada no Mecanizada"}];

  Pregunta37: any = [{label:"N/A", value:"N/A"},
                  {label:"Fácil y menor a 500m", value:"Fácil y menor a 500m"},
                  {label:"Fácil y mayor a 500m", value:"Fácil y mayor a 500m"},
                  {label:"Difícil acceso", value:"Difícil acceso"},
                  {label:"Reparable para entrada de tractor", value:"Reparable para entrada de tractor"}];

  Pregunta39: any = [{label:"Permanente", value:"Permanente"},
                  {label:"Solo en invierno", value:"Solo en invierno"}];

  Pregunta40: any = [{label:"Más de 2 Mz", value:"Más de 2 Mz"},
                  {label:"Menos de 2 Mz", value:"Menos de 2 Mz"}];

  Pregunta42: any = [{label:"Micro presa desmontable", value:"Micro presa desmontable"},
                  {label:"Micro presa fija", value:"Micro presa fija"},
                  {label:"Pila de concreto", value:"Pila de concreto"},
                  {label:"Tanque plástico", value:"Tanque plástico"},
                  {label:"Tanque zamorano", value:"Tanque zamorano"},
                  {label:"Fosa revestida con plástico", value:"Fosa revestida con plástico"},
                  {label:"Otros", value:"Otros"}];

  Pregunta45: any = [{label:"Menos de 100 m2", value:"Menos de 100 m2"},
                  {label:"Más de 100 m2", value:"Más de 100 m2"}];

  Pregunta46: any = [{label:"Teja de Barro", value:"Teja de Barro"},
                  {label:"Zinc", value:"Zinc"}];

  Pregunta47: any = [{label:"Seguro", value:"Seguro"},
                  {label:"Medianamente Seguro", value:"Medianamente Seguro"},
                  {label:"Mal Estado", value:"Mal Estado"}];

  Pregunta48: any = [{label:"Pila de concreto", value:"Pila de concreto"},
                  {label:"Tanque Plástico", value:"Tanque Plástico"},
                  {label:"Tanque Zamorano", value:"Tanque Zamorano"},
                  {label:"Fosa Revestida con Plástico", value:"Fosa Revestida con Plástico"},                  
                  {label:"Otros", value:"Otros"}];
        
  Pregunta49: any = [{label:"Frutales", value:"Frutales"},
                  {label:"Medicinales", value:"Medicinales"},
                  {label:"Ornamentales", value:"Ornamentales"},
                  {label:"Abejas", value:"Abejas"},
                  {label:"Peces", value:"Peces"},
                  {label:"Humano", value:"Humano"},
                  {label:"Otro", value:"Otro"}];

  Pregunta50: any = [{label:"Especie", value:"Especie"},
                  {label:"Dinero", value:"Dinero"},
                  {label:"Otras", value:"Otras"}];

  Observable1: any = [{label:"Migración interior como mano de obra temporal", value:"Migración interior como mano de obra temporal"},
                  {label:"Migración al extranjero como mano de obra temporal", value:"Migración al extranjero como mano de obra temporal"}];

  Observable2: any = [{label:"Buena", value:"Buena"},
                  {label:"Regular", value:"Regular"},
                  {label:"Mala", value:"Mala"}];

  Observable4: any = [{label:"Vehículos", value:"Vehículos"},
                  {label:"Equipos de Riego", value:"Equipos de Riego"},
                  {label:"Bomba", value:"Bomba"},
                  {label:"Arado-Bueyes", value:"Arado-Bueyes"},
                  {label:"Herramientas Menores", value:"Herramientas Menores"}];

constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl : AlertController,
    private geolocation:Geolocation, 
    private sqlite: SQLite,
    private toast: Toast,
    private camera: Camera  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFichaPage');   
    this.mymodel = "segment1";
    this.ficha.Pregunta5 = new Date().toJSON().slice(0,10);
    this.ObtenerTecnico()
    this.ObtenerDepartamento();
    //this.getGeolocation()   
  }

  getGeolocation(){
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
     this.ficha.Pregunta7X= data.coords.latitude;
     this.ficha.Pregunta7Y= data.coords.longitude;
     console.log (data.coords.latitude + " " + data.coords.longitude)
    });
  }
  

  ObtenerDepartamento(){
    this.sqlite.create({
      name:'finca.db',
      location: 'default'
    }).then( (db:SQLiteObject) => {
      db.executeSql('SELECT * FROM Departamento ORDER BY DescripcionDep ASC', [])
      .then(res => {
        this.departamento = [];
        for(var i=0; i<res.rows.length; i++) {
          this.departamento.push({KeyDepartamento:res.rows.item(i).KeyDepartamento,DescripcionDep:res.rows.item(i).DescripcionDep})
        }
      })
    })
  }

  ObtenerMunicipios(KeyDepartamento){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then( (db : SQLiteObject) => {
      db.executeSql('SELECT KeyMunicipio, KeyDepartamento, DescripcionMun FROM Municipio WHERE KeyDepartamento=? ORDER BY DescripcionMun ASC', [KeyDepartamento])
      .then(res => {
        this.municipio = [];
        for(var i=0; i<res.rows.length; i++) {
          this.municipio.push({KeyMunicipio:res.rows.item(i).KeyMunicipio, KeyDepartamento:res.rows.item(i).KeyDepartamento, DescripcionMun:res.rows.item(i).DescripcionMun})
        }
      })
      .catch(e => console.log (e.messange))
    })

  }

  ObtenerTecnico(){
    this.sqlite.create({
      name: 'finca.db',
      location: 'default'
    }).then((db: SQLiteObject) => {      
      db.executeSql('SELECT COUNT(*) AS Cantidad FROM Tecnico', [])
      .then(res => {
        let cant = parseInt(JSON.stringify(res.rows.item(0).Cantidad));        
        if (cant === 0){
          this.toast.show('Tiene que ingresar el nombre del tecnico', '5000', 'center').subscribe(
            toast => {
              this.ficha.Pregunta4 = "User";
              this.navCtrl.push(TecnicoPage);             
            }
          );
        } else {
          db.executeSql('SELECT * FROM Tecnico',[]).then(tec =>{
            for(var i=0; i<tec.rows.length; i++) {
              this.ficha.Pregunta4 = tec.rows.item(i).Name;
            }
          })          
        }      
      })
    })
  }

  getPicture1(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.ficha.Foto1 = 'data:image/jpeg;base64,${imageData}';
    })
    .catch(error =>{
      console.error( error );
    });
  }

  getPicture2(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.ficha.Foto2 = 'data:image/jpeg;base64,${imageData}';
    })
    .catch(error =>{
      console.error( error );
    });
  }

  getPicture3(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.ficha.Foto3 = 'data:image/jpeg;base64,${imageData}';
    })
    .catch(error =>{
      console.error( error );
    });
  }

  getPicture4(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.ficha.Foto4 = 'data:image/jpeg;base64,${imageData}';
    })
    .catch(error =>{
      console.error( error );
    });
  }

  saveData() {
    if (this.ficha.Pregunta8 === "" && this.ficha.Pregunta9A === ""){
      this.toast.show('Error al guardar datos en blanco', '5000', 'center').subscribe(
        toast => {
          this.navCtrl.popToRoot();
        }
      );
    } else {
      
      let alert = this.alertCtrl.create({
        title: 'Guardar Ficha',
        message: '¿Estás seguro de guardar los datos de la ficha?',
        buttons: [
          {
            text: 'No',
            role: 'cancel',
            handler: () => {
              // Ha respondido que no así que no hacemos nada
            }
          },
          {
            text: 'Si',
            handler: () => {
              
              let cadena = "INSERT INTO ficha VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)" 
  
              this.sqlite.create({
                name: 'finca.db',
                location: 'default'
              }).then((db: SQLiteObject) => {
                db.executeSql(cadena,[this.ficha.Pregunta1, this.ficha.Pregunta2, this.ficha.Pregunta3, this.ficha.Pregunta4, 
                  this.ficha.Pregunta5, this.ficha.Pregunta6, this.ficha.Pregunta7X, this.ficha.Pregunta7Y, this.ficha.Pregunta8, 
                  this.ficha.Pregunta9, this.ficha.Pregunta9A, this.ficha.Pregunta10, this.ficha.Pregunta11, this.ficha.Pregunta12, 
                  this.ficha.Pregunta13, this.ficha.Pregunta13A, this.ficha.Pregunta14, this.ficha.Pregunta15, this.ficha.Pregunta15A, 
                  this.ficha.Pregunta16, this.ficha.Pregunta16A, this.ficha.Pregunta17, this.ficha.Pregunta18, this.ficha.Pregunta18A, 
                  this.ficha.Pregunta18B, this.ficha.Pregunta18C, this.ficha.Pregunta18D, this.ficha.Pregunta19, this.ficha.Pregunta19A, 
                  this.ficha.Pregunta19B, this.ficha.Pregunta19C, this.ficha.Pregunta19D, this.ficha.Pregunta19E, this.ficha.Pregunta19F, 
                  this.ficha.Pregunta20, this.ficha.Pregunta21, this.ficha.Pregunta21A, this.ficha.Pregunta21B, this.ficha.Pregunta21C, 
                  this.ficha.Pregunta22, this.ficha.Pregunta23, this.ficha.Pregunta24, this.ficha.Pregunta25, this.ficha.Pregunta26, 
                  this.ficha.Pregunta27, this.ficha.Pregunta28, this.ficha.Pregunta29, this.ficha.Pregunta30, this.ficha.Pregunta31, 
                  this.ficha.Pregunta32, this.ficha.Pregunta33, this.ficha.Pregunta34, this.ficha.Pregunta35, this.ficha.Pregunta36, 
                  this.ficha.Pregunta37, this.ficha.Pregunta38, this.ficha.Pregunta39, this.ficha.Pregunta40, this.ficha.Pregunta41, 
                  this.ficha.Pregunta42, this.ficha.Pregunta42A, this.ficha.Pregunta43, this.ficha.Pregunta44, this.ficha.Pregunta45, 
                  this.ficha.Pregunta46, this.ficha.Pregunta47, this.ficha.Pregunta48, this.ficha.Pregunta48A, this.ficha.Pregunta49, 
                  this.ficha.Pregunta50, this.ficha.Pregunta50A, this.ficha.Pregunta50B, this.ficha.Observable1, this.ficha.Observable2, 
                  this.ficha.Observable3, this.ficha.Observable4, this.ficha.Foto1, this.ficha.Foto2, this.ficha.Foto3, this.ficha.Foto4, 
                  this.ficha.Valoracion])
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
        ]
      });

      alert.present();
    }

  }



  
}
