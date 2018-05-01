import ServiceInterface from '../../Common/Service/ServiceInterface';
import MusicAbstractAdapter from '../adapters/CommonAdapter';

export default abstract class AlbumService implements ServiceInterface {
  protected adapter: MusicAbstractAdapter;

  constructor(adapter: MusicAbstractAdapter) {
    this.adapter = adapter;
  }

  abstract handle(id: any, param2?: any);

}