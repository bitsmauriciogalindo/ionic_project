import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'micuenta',
    loadChildren: () => import('./pages/micuenta/micuenta.module').then( m => m.MicuentaPageModule)
  },
  {
    path: 'bookdetails/:id',
    loadChildren: () => import('./pages/home/pages/bookdetails/bookdetails.module').then( m => m.BookdetailsPageModule)
  },
  {
    path: 'addbook',
    loadChildren: () => import('./pages/home/pages/addingbook/addingbook.module').then( m => m.AddingbookPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./pages/acercade/acercade.module').then( m => m.AcercadePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
