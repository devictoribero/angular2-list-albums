import MusicRequest from '../../Request/MusicRequest';
import AppleMusicClientInterface from '../clients/MusicClientInterface';
import MusicAdapterInterface from './MusicAdapterInterface';
import TransformerInterface from '../../common/transformer/TransformerInterface';

export default class MusicAdapter implements MusicAdapterInterface {
  private transformer: TransformerInterface;
  private client: AppleMusicClientInterface;

  constructor(transformer: TransformerInterface, client: AppleMusicClientInterface) {
    this.transformer = transformer;
    this.client = client;
  }

  get(request: MusicRequest): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(
        this.client
          .get(this.handleRequest(request))
          .then(res => this.transformer.handle(res))
      );
    });
  }

  handleRequest(request: MusicRequest): string {
    return request.getQueryString();
  }
}
