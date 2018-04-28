import {Injectable} from '@angular/core';

@Injectable()
export default class HTTPClient {

  get(url: string) {
    return fetch(url).then(res => res.json());
  }

}
