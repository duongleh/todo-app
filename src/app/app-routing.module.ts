import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-shell/master-detail/master-detail.module').then(module => module.MasterDetailModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./app-shell/list/list.module').then(module => module.ListModule)
  },
  {
    path: 'blank',
    loadChildren: () => import('./app-shell/blank/blank.module').then(module => module.BlankModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./app-shell/grid/grid.module').then(module => module.GridModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

