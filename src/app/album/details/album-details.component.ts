import { Component, OnInit} from '@angular/core';
import {MUSICLIST} from '../../../mocks/albums';
import Album from '../entity/Album';

@Component({
    selector: 'app-album-details',
    templateUrl: './album-details.component.html',
    styleUrls: ['./album-details.component.css'],
})

export class AlbumDetailsComponent implements OnInit {
    album: Album = MUSICLIST[0];

    constructor() { }

    ngOnInit() {}
}