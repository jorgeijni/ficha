import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTecnicoPage } from './add-tecnico';

@NgModule({
  declarations: [
    AddTecnicoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTecnicoPage),
  ],
})
export class AddTecnicoPageModule {}
