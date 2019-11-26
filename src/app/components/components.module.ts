import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        TopbarComponent,
        MenuComponent
    ],
    exports: [
        TopbarComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ]
})
export class ComponentsModule { }