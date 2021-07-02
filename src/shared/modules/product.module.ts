import { IProduct } from "../interfaces/product.interface";

export class Product implements IProduct{
  constructor(
    public name: string,
    public countNeeded: string,
    public countBought: number,
    public isReady: boolean,
  ){}
}