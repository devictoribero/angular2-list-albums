import { Component, OnInit} from '@angular/core';
import Album from '../../entity/Album';
import {GetAlbumsByArtistId} from '../services/GetAlbumsByArtistId';
import Artist from '../../../Artist/entity/Artist';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  providers: [GetAlbumsByArtistId]
})

export class AlbumListComponent implements OnInit {
  artist: Artist;
  albums: Array<Album> = [];
  private getAlbumsByArtistService: GetAlbumsByArtistId;

  constructor(service: GetAlbumsByArtistId) {
    this.getAlbumsByArtistService = service;
  }

  ngOnInit() {
    const idJackJohnson = 909253;
    this.getAlbumsByArtistService.handle(idJackJohnson).then(result => {
      this.albums = result.albums;
      this.artist = result.artist;
    });
  }
}