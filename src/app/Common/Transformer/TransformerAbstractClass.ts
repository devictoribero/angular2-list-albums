import TransformerInterface from './TransformerInterface';

export default abstract class TransformerAbstractClass implements  TransformerInterface {

  abstract handle(data: object): any;

}