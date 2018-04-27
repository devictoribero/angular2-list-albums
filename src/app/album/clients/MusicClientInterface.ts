export default interface MusicClientInterface {

  get(querystring: string): Promise<any>;

}