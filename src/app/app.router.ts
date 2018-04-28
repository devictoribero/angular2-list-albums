import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AlbumListComponent} from './album/list/component/album-list.component';
import {AlbumDetailsComponent} from './album/details/component/album-details.component';

export const router: Routes = [
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {
    path: 'albums', children: [
      {path: '', component: AlbumListComponent},
      {path: ':id', component: AlbumDetailsComponent, pathMatch: 'full'},
    ]
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
