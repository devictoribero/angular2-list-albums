import ServiceInterface from '../../Common/Service/CommonServiceInterface';
import { HttpClient } from '@angular/common/http';

export default abstract class MusicService implements ServiceInterface {
  protected httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  abstract handle(id: any, param2?: any);
}
