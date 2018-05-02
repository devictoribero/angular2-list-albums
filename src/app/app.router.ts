import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AlbumListComponent} from '../infrastructure/components/album/list/album-list.component';
import {AlbumDetailsComponent} from '../infrastructure/components/album/details/album-details.component';

export const router: Routes = [
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {path: 'albums', component: AlbumListComponent, pathMatch: 'full'},
  {path: 'albums/:id', component: AlbumDetailsComponent, pathMatch: 'full'},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
