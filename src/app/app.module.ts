import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes} from './app.router';

import { AppComponent } from './app.component';
import HTTPClient from '../infrastructure/http/clients/HTTPClient';
import AppleMusicClient from '../infrastructure/AppleMusic/clients/AppleMusicClient';
import MusicAdapter from './album/adapters/MusicAdapter';
import {AlbumListComponent} from './components/album/list/album-list.component';
import {AlbumDetailsComponent} from './components/album/details/album-details.component';
import {GetAlbumsByArtistId} from './album/list/services/GetAlbumsByArtistId';
import {GetTracksFromAlbumById} from './album/details/services/GetTracksFromAlbumById';


@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
