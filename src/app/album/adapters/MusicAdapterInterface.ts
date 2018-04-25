import MusicRequest from '../../Request/MusicRequest';

export default interface MusicAdapterInterface {

  get(request: MusicRequest): Promise<any>;

  handleRequest(request: MusicRequest): string;

}