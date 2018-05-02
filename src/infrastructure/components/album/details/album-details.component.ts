import {Component, OnInit} from '@angular/core';
import Artist from '../../../../app/Artist/entity/Artist';
import Track from '../../../../app/Track/Entity/Track';
import {ActivatedRoute} from '@angular/router';
import MusicService from '../../../../app/album/services/MusicService';
import CommonTransformer from '../../../../app/Common/Transformer/CommonTransformer';
import {GetTracksFromAlbumById} from '../../../../app/album/details/services/GetTracksFromAlbumById';
import GetTracksFromAlbumByIdTransformer from '../../../../app/album/details/transformers/GetTracksFromAlbumByIdTransformer';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.sass'],
  providers: [{
    provide: MusicService,
    useClass: GetTracksFromAlbumById
  }, {
    provide: CommonTransformer,
    useClass: GetTracksFromAlbumByIdTransformer
  }]
})

export class AlbumDetailsComponent implements OnInit {
  artist: Artist;
  albumThumbnail: string = 'https://www.bhphotovideo.com/images/images500x500/Savage_27_12_107_x_12yds_Background_45483.jpg';
  tracks: Array<Track> = [];
  private getTracksFromAlbumById: MusicService;
  private transformer: CommonTransformer;
  private route: ActivatedRoute;

  constructor(
    service: MusicService,
    transformer: CommonTransformer,
    route: ActivatedRoute
  ) {
    this.getTracksFromAlbumById = service;
    this.transformer = transformer;
    this.route = route;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //const albumId = +params['id'];
      const albumId = 879273552;

      this.getTracksFromAlbumById.handle(albumId).subscribe(result => {
        const albumsDetailDTO = this.transformer.handle(result.results);
        this.tracks = albumsDetailDTO.tracks;
        console.log(this.tracks);
        this.artist = albumsDetailDTO.artist;
        this.albumThumbnail = albumsDetailDTO.thumbnail;
      });
    });
  }
}
