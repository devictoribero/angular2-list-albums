import {Injectable} from '@angular/core';

@Injectable()
export default class MusicRequest {
  private artistId: number;
  private entityType: string;
  private limit: number;

  constructor(artistId: number, entityType: string = null, limit: number = null) {
    this.artistId = artistId;
    this.entityType = entityType;
    this.limit = limit;
  }

  getQueryString(): string {
    let queryString = '';

    queryString += 'id=' + this.artistId;
    if (this.entityType) {
      queryString += '&entity=' + this.entityType;
    }

    if (this.limit) {
      queryString += '&limit=' + this.limit;
    }

    return queryString;
  }
}