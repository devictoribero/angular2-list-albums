import {Component, OnInit} from '@angular/core';
import Artist from '../../../../app/Artist/entity/Artist';
import Track from '../../../../app/Track/Entity/Track';
import {ActivatedRoute} from '@angular/router';
import MusicService from '../../../../app/album/services/MusicService';
import CommonTransformer from '../../../../app/Common/Transformer/CommonTransformer';
import {GetTracksFromAlbumById} from '../../../../app/album/details/services/GetTracksFromAlbumById';
import GetTracksFromAlbumByIdTransformer from '../../../../app/album/details/transformers/GetTracksFromAlbumByIdTransformer';
import {ChangeDetectorRef} from '@angular/core';
import Album from '../../../../app/album/entity/Album';

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
  album: Album;
  private getTracksFromAlbumById: MusicService;
  private transformer: CommonTransformer;
  private route: ActivatedRoute;
  private ref: ChangeDetectorRef;

  constructor(
    service: MusicService,
    transformer: CommonTransformer,
    route: ActivatedRoute,
    ref: ChangeDetectorRef,
  ) {
    this.getTracksFromAlbumById = service;
    this.transformer = transformer;
    this.route = route;
    this.ref = ref;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const albumId = +params['id'];

      this.getTracksFromAlbumById.handle(albumId).subscribe(result => {
        this.album = this.transformer.handle(result.results);
        console.log(this.album);
        this.ref.detectChanges();
      });
    });
  }
}
