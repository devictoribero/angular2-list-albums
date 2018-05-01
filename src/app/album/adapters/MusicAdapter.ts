import MusicRequest from '../../Request/MusicRequest';
import CommonTransformer from '../../Common/Transformer/CommonTransformer';
import MusicClient from '../../../infrastructure/AppleMusic/clients/MusicClient';
import AppleMusicClientInterface from '../clients/MusicClientInterface';
import TransformerInterface from '../../Common/Transformer/CommonTransformerInterface';
import CommonAdapterInterface from '../../Common/Adapter/CommonAdapterInterface';

export default class MusicAdapter implements CommonAdapterInterface {
  private transformer: TransformerInterface;
  private client: AppleMusicClientInterface;

  constructor(transformer: CommonTransformer, client: MusicClient) {
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
