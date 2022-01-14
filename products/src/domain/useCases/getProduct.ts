import { NotFoundException } from '@nestjs/common';
import { Products } from '../modules/entities/products';
import { ProductsRepository } from '../repositories/products.repository';

export class GetProduct {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async call(name: string): Promise<Products[]> {
    try {
      return await this.productsRepository.findByName(name);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
