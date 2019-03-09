import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { MunicipiosPage } from './../pages/municipios/municipios';
import { DepartamentosPage } from './../pages/departamentos/departamentos';
import { TecnicoPage } from './../pages/tecnico/tecnico';
import { FichaPage } from './../pages/ficha/ficha';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  showSubmenu: boolean = false;
  menuItemHandler() {
    this.showSubmenu = !this.showSubmenu;
  }

  pages: Array<{title: string, component: any}>;
  submenuConfiguracin: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
     // { title: 'List', component: ListPage },
      { title: 'Ficha', component: FichaPage },
      
    ];

    this.submenuConfiguracin = [ 
      { title: 'Departamentos', component: DepartamentosPage },
      { title: 'Municipios', component: MunicipiosPage },
      { title: 'Técnico', component: TecnicoPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();    
      this.splashScreen.hide();
    });
  }

  public OpenMenu(splashScreen : SplashScreen) {
    this.splashScreen.hide();
    this.rootPage = HomePage;
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openSubPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
  
}
