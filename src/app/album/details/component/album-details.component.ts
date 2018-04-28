import { Component, OnInit} from '@angular/core';
import {MOCK_ALBUM_DETAILS} from '../../../../mocks/album';

@Component({
    selector: 'app-album-details',
    templateUrl: './album-details.component.html',
    styleUrls: ['./album-details.component.css'],
})

export class AlbumDetailsComponent implements OnInit {
    album: object = MOCK_ALBUM_DETAILS;

    constructor() { }

    ngOnInit() {}
}