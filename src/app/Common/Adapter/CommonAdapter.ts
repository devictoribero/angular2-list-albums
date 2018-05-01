import MusicRequest from '../../Request/MusicRequest';
import AppleMusicClientInterface from '../../album/clients/MusicClientInterface';
import MusicAdapterInterface, {default as CommonAdapterInterface} from './CommonAdapterInterface';
import TransformerInterface from '../Transformer/CommonTransformerInterface';

export default abstract class CommonAdapter implements CommonAdapterInterface {
  protected transformer: TransformerInterface;
  protected client: AppleMusicClientInterface;

  constructor(transformer: TransformerInterface, client: AppleMusicClientInterface) {
    this.transformer = transformer;
    this.client = client;
  }

  abstract get(request: MusicRequest): Promise<any>;

  abstract handleRequest(request: MusicRequest): string;
}
