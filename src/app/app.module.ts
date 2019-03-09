import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { MunicipiosPage } from './../pages/municipios/municipios';
import { EditMunicipioPage } from './../pages/edit-municipio/edit-municipio';
import { AddMunicipioPage } from './../pages/add-municipio/add-municipio';

import { DepartamentosPage } from './../pages/departamentos/departamentos';
import { EditdepartamentoPage } from './../pages/editdepartamento/editdepartamento';
import { AdddepartamentoPage } from './../pages/adddepartamento/adddepartamento';

import { TecnicoPage } from './../pages/tecnico/tecnico';
import { EditTecnicoPage } from './../pages/edit-tecnico/edit-tecnico';
import { AddTecnicoPage } from './../pages/add-tecnico/add-tecnico';

import { FichaPage } from './../pages/ficha/ficha';
import { AddFichaPage } from './../pages/add-ficha/add-ficha';
import { EditFichaPage } from './../pages/edit-ficha/edit-ficha';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Toast } from '@ionic-native/toast';
import { SQLite  } from '@ionic-native/sqlite';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DatabaseProvider } from '../providers/database/database';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DepartamentosPage,
    AdddepartamentoPage,
    EditdepartamentoPage,
    MunicipiosPage,
    AddMunicipioPage,
    EditMunicipioPage,
    TecnicoPage,
    EditTecnicoPage,
    AddTecnicoPage,
    FichaPage,
    AddFichaPage,
    EditFichaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DepartamentosPage,
    AdddepartamentoPage,
    EditdepartamentoPage,
    MunicipiosPage,
    AddMunicipioPage,
    EditMunicipioPage,
    TecnicoPage,
    EditTecnicoPage,
    AddTecnicoPage,
    FichaPage,
    AddFichaPage,
    EditFichaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    Toast,
    Camera,
  ]
})
export class AppModule {}
