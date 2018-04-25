import { Component, OnInit} from '@angular/core';
import Album from '../entity/Album';
import AlbumService from '../services/AlbumService';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})

export class AlbumListComponent implements OnInit {
  title: string = 'My music list';
  albums: Array<Album> = [];
  service: AlbumService;

  constructor(albumService: AlbumService) {
    this.service = albumService;
  }

  ngOnInit() {
    this.albums = this.service.get();
  }
}