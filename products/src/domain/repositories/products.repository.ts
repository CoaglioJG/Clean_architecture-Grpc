import { Products } from '../modules/entities/products';

export abstract class ProductsRepository {
  save: (products: Products) => Promise<Products>;
  delete: (id: string) => Promise<any>;
  update: (name: string, elements: Object) => Promise<Products>;
  find: () => Promise<Products[]>;
  findByName: (name: string) => Promise<Products[]>;
  findById: (id: number) => Promise<any>;
  countProducts: (name: string) => Promise<any>;
  clone: (id: number) => Promise<any>;
}
