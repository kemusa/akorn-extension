import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipsPage } from './clips.page';

const routes: Routes = [
  {
    path: '',
    component: ClipsPage
  },
  {
    path: ':videoId/:start/:end',
    loadChildren: () => import('./clip/clip.module').then(m => m.ClipPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClipsPageRoutingModule {}
