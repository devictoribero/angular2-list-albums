import ServiceInterface from '../../Common/Service/CommonServiceInterface';
import MusicAdapter from '../adapters/MusicAdapter';

export default abstract class MusicService implements ServiceInterface {
  protected adapter: MusicAdapter;

  constructor(adapter: MusicAdapter) {
    this.adapter = adapter;
  }

  abstract handle(id: any, param2?: any);
}
