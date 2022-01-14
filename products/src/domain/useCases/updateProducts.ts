import { BadRequestException } from '@nestjs/common';
import { ProductsRepository } from '../repositories/products.repository';

export class UpdateProducts {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async call(name: string, elements: any) {
    try {
      return await this.productsRepository.update(name, elements);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
