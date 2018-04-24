import { Component, OnInit} from '@angular/core';
import Album from '../entity/Album';
import {MOCK_MUSIC} from '../../../mocks/albums';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})

export class AlbumListComponent implements OnInit {
    title: string = 'My music list';
    albums: Array<Album> = MOCK_MUSIC;

    constructor() { }

    ngOnInit() {}
}