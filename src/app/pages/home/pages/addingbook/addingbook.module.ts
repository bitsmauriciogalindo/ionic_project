import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddingbookPageRoutingModule } from './addingbook-routing.module';

import { AddingbookPage } from './addingbook.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddingbookPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddingbookPage]
})


export class AddingbookPageModule {}
