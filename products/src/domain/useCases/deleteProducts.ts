import { ProductsRepository } from '../repositories/products.repository';

export class DeleteProducts {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async call(id: number) {
    try {
      const product = await this.productsRepository.findById(id);

      if (!product) return 'product not found';

      return await this.productsRepository.delete(product);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
