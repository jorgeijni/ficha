import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFichaPage } from './add-ficha';

@NgModule({
  declarations: [
    AddFichaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFichaPage),
  ],
})
export class AddFichaPageModule {}
