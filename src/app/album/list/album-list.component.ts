import { Component, OnInit} from '@angular/core';
import Album from '../Album';
import {MUSICLIST} from '../../mocks/albums';

@Component({
    selector: 'app-album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css'],
})

export class AlbumListComponent implements OnInit {
    title: string = 'My music list';
    albums: Array<Album> = MUSICLIST;

    constructor() { }

    ngOnInit() {}
}