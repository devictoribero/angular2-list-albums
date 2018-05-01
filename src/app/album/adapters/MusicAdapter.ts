import MusicRequest from '../../Request/MusicRequest';
import AppleMusicClientInterface from '../clients/MusicClientInterface';
import MusicAdapterInterface from './CommonAdapterInterface';
import TransformerInterface from '../../Common/Transformer/TransformerInterface';
import MusicAbstractAdapter from './CommonAdapter';

export default class MusicAdapter extends MusicAbstractAdapter {

  constructor(transformer: TransformerInterface, client: AppleMusicClientInterface) {
    super(transformer, client);
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
