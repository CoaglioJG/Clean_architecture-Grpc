import { BadRequestException } from '@nestjs/common';
import { Products } from '../modules/entities/products';
import { ProductsRepository } from '../repositories/products.repository';

export class SaveProducts {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async call(products: Products) {
    try {
      const countProducts = await this.productsRepository.countProducts(
        products.name,
      );

      const saveProducts = await this.productsRepository.save(products);

      if (countProducts) {
        return { products: saveProducts, quantityProduct: countProducts };
      } else return saveProducts;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
