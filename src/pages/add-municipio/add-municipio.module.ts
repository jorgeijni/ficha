import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMunicipioPage } from './add-municipio';

@NgModule({
  declarations: [
    AddMunicipioPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMunicipioPage),
  ],
})
export class AddMunicipioPageModule {}
