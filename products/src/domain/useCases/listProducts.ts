import { ProductsRepository } from '../repositories/products.repository';

export class ListProducts {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async call() {
    try {
      const products = await this.productsRepository.find();

      if (!products) return 'there are no registered products';

      return products;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
