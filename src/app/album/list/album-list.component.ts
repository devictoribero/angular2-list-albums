import { Component, OnInit} from '@angular/core';
import Album from '../entity/Album';
import {GetAlbumsByArtistId} from '../services/GetAlbumsByArtistId';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})

export class AlbumListComponent implements OnInit {
  title: string = 'My music list';
  albums: Array<Album> = [];
  getAlbumsByArtistService: GetAlbumsByArtistId;

  constructor(getAlbumsByArtist: GetAlbumsByArtistId) {
    this.getAlbumsByArtistService = getAlbumsByArtist;
  }

  ngOnInit() {
    const idJackJohnson = 909253;
    this.albums = this.getAlbumsByArtistService.handle(idJackJohnson);
  }
}