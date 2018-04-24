import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ExampleComponent} from './example/example.component';
import {AlbumListComponent} from './musicList/album-list.component';

export const router: Routes = [
  {path: '', redirectTo: '/albums', pathMatch: 'full'},
  {
    path: 'albums', children: [
      {path: '', component: AlbumListComponent},
      {path: '', component: ExampleComponent},
    ]
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
