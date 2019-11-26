import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddingbookPage } from './addingbook.page';

const routes: Routes = [
  {
    path: '',
    component: AddingbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddingbookPageRoutingModule {}
