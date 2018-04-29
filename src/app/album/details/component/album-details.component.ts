import {Component, OnInit} from '@angular/core';
import Album from '../../entity/Album';
import {GetAlbumsByArtistId} from '../../list/services/GetAlbumsByArtistId';
import Artist from '../../../Artist/entity/Artist';
import Track from '../../../track/entity/Track';
import {GetTracksFromAlbumById} from '../services/GetTracksFromAlbumById';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
})

export class AlbumDetailsComponent implements OnInit {
  artist: Artist;
  tracks: Array<Track> = [];
  getTracksFromAlbumById: GetTracksFromAlbumById;

  constructor(service: GetTracksFromAlbumById) {
    this.getTracksFromAlbumById = service;
  }

  ngOnInit() {
    const albumId = 909253;
    this.getTracksFromAlbumById.handle(albumId).then(result => {
      this.tracks = result.tracks;
      this.artist = result.artist;
    });
  }
}