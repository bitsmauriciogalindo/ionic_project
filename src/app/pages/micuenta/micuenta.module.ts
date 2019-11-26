import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicuentaPageRoutingModule } from './micuenta-routing.module';

import { MicuentaPage } from './micuenta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicuentaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MicuentaPage]
})
export class MicuentaPageModule {}
