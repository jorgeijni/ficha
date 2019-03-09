import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DepartamentosPage } from './departamentos';

@NgModule({
  declarations: [
    DepartamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(DepartamentosPage),
  ],
})
export class DepartamentosPageModule {}
