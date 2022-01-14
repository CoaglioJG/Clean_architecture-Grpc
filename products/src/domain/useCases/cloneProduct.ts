import { ProductsRepository } from '../repositories/products.repository';

export class CloneProduct {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async call(id: number) {
    try {
      const product = await this.productsRepository.clone(id);

      if (!product) return 'product not found';

      return await this.productsRepository.save(product);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
