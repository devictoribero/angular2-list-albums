import MusicRequest from '../../Request/MusicRequest';

export default interface CommonAdapterInterface {

  get(request: MusicRequest): Promise<any>;

  handleRequest(request: MusicRequest): string;

}
