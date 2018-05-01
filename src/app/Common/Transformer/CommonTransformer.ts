import CommonTransformerInterface from './CommonTransformerInterface';

export default abstract class CommonTransformer implements  CommonTransformerInterface {

  abstract handle(data: object): any;

}