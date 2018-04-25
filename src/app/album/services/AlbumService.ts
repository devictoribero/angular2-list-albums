import Album from '../entity/Album';
import {Injectable} from '@angular/core';

@Injectable()
export default class AlbumService {
  get(): Array<Album> {
    return [];
  }
}
