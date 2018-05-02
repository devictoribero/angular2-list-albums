import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes} from './app.router';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import {AlbumListComponent} from '../infrastructure/components/album/list/album-list.component';
import {AlbumDetailsComponent} from '../infrastructure/components/album/details/album-details.component';
import {GetAlbumsByArtistId} from './album/list/services/GetAlbumsByArtistId';
import GetAlbumsByArtistIdTransformer from './album/list/transformers/GetAlbumsByArtistIdTransformer';
import {GetTracksFromAlbumById} from './album/details/services/GetTracksFromAlbumById';
import GetTracksFromAlbumByIdTransformer from './album/details/transformers/GetTracksFromAlbumByIdTransformer';


@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    HttpClientModule,
    HttpClient,
    GetAlbumsByArtistId,
    GetAlbumsByArtistIdTransformer,
    GetTracksFromAlbumById,
    GetTracksFromAlbumByIdTransformer,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
