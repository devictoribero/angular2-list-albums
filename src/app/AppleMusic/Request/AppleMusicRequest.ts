export default class AppleMusicRequest {
  private artistId: number;
  private entityType: string;
  private limit: number;

  constructor(artistId: number, entityType: string = null, limit: number = 10) {
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
    queryString += '&limit=' + this.limit;

    return queryString;
  }
}