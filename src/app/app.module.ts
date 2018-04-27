import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes} from './app.router';

import { AppComponent } from './app.component';
import {AlbumListComponent} from './album/list/album-list.component';
import {AlbumDetailsComponent} from './album/details/album-details.component';
import {GetAlbumsByArtistId} from './album/services/GetAlbumsByArtistId';
import {GetTracksFromAlbumById} from './album/services/GetTracksFromAlbumById';
import MusicAdapter from './album/adapters/MusicAdapter';
import {ClientRequest} from 'http';
import HTTPClient from '../infrastructure/http/clients/HTTPClient';
import AppleMusicClient from '../infrastructure/AppleMusic/clients/AppleMusicClient';


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
    HTTPClient,
    AppleMusicClient,
    MusicAdapter,
    GetAlbumsByArtistId,
    GetTracksFromAlbumById,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
