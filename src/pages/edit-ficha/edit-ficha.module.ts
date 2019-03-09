import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditFichaPage } from './edit-ficha';

@NgModule({
  declarations: [
    EditFichaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditFichaPage),
  ],
})
export class EditFichaPageModule {}
