import AppleMusicRequest from '../Request/AppleMusicRequest';

export default interface AppleMusicAdapterInterface {

  get(request: AppleMusicRequest): Promise<any>;

  handleRequest(request: AppleMusicRequest): string;

}