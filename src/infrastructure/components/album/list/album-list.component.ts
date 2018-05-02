import { Component, OnInit} from '@angular/core';
import Album from '../../../../app/album/entity/Album';
import {GetAlbumsByArtistId} from '../../../../app/album/list/services/GetAlbumsByArtistId';
import Artist from '../../../../app/Artist/entity/Artist';
import MusicService from '../../../../app/album/services/MusicService';
import GetAlbumsByArtistIdTransformer from '../../../../app/album/list/transformers/GetAlbumsByArtistIdTransformer';
import CommonTransformer from '../../../../app/Common/Transformer/CommonTransformer';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.sass'],
  providers: [{
    provide: MusicService,
    useClass: GetAlbumsByArtistId
  }, {
    provide: CommonTransformer,
    useClass: GetAlbumsByArtistIdTransformer
  }]
})

export class AlbumListComponent implements OnInit {
  artist: Artist;
  albums: Array<Album> = [];
  private getAlbumsByArtistId: GetAlbumsByArtistId;
  private transformer: GetAlbumsByArtistIdTransformer;

  constructor(service: MusicService, transformer: CommonTransformer) {
    this.getAlbumsByArtistId = service;
    this.transformer = transformer;
  }

  ngOnInit() {
    const idJackJohnson = 909253;
    this.getAlbumsByArtistId.handle(idJackJohnson).subscribe(result => {
      const albumsListDTO = this.transformer.handle(result.results);
      this.artist = albumsListDTO.artist;
      this.albums = albumsListDTO.albums;
    });
  }
}