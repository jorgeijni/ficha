import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTecnicoPage } from './edit-tecnico';

@NgModule({
  declarations: [
    EditTecnicoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTecnicoPage),
  ],
})
export class EditTecnicoPageModule {}
