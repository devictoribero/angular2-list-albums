import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes} from './app.router';

import { AppComponent } from './app.component';
import {ExampleComponent} from './example/example.component';
import {AlbumListComponent} from './musicList/album-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
