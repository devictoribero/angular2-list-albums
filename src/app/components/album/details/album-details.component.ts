import {Component, OnInit} from '@angular/core';
import Album from '../../../album/entity/Album';
import {GetAlbumsByArtistId} from '../../../album/list/services/GetAlbumsByArtistId';
import Artist from '../../../Artist/entity/Artist';
import Track from '../../../Track/Entity/Track';
import {GetTracksFromAlbumById} from '../../../album/details/services/GetTracksFromAlbumById';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.sass'],
})

export class AlbumDetailsComponent implements OnInit {
  artist: Artist;
  tracks: Array<Track> = [];
  private getTracksFromAlbumById: GetTracksFromAlbumById;
  private route: ActivatedRoute;

  constructor(service: GetTracksFromAlbumById, route: ActivatedRoute) {
    this.getTracksFromAlbumById = service;
    this.route = route;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const albumId = +params['id'];

      this.getTracksFromAlbumById.handle(albumId).then(result => {
        this.tracks = result.tracks;
        this.artist = result.artist;
      });
    });
  }
}