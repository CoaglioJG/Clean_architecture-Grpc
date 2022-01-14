import { InjectRepository } from '@nestjs/typeorm';
import { ProductsRepository } from 'src/domain/repositories/products.repository';
import { Repository } from 'typeorm';
import { ProductsEntity } from '../entities/products.entity';

export class ProductsImpl implements ProductsRepository {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>,
  ) {}

  async save(products: ProductsEntity): Promise<ProductsEntity> {
    return await this.productsRepository.save(products);
  }

  async find(): Promise<ProductsEntity[]> {
    return await this.productsRepository.find();
  }

  async findByName(name: string): Promise<ProductsEntity[]> {
    return await this.productsRepository.find({ where: { name } });
  }

  async findById(id: number): Promise<ProductsEntity> {
    return await this.productsRepository.findOneOrFail(id);
  }

  async delete(id: string): Promise<any> {
    return await this.productsRepository.delete(id);
  }

  async update(name: string, elements: Object): Promise<any> {
    return await this.productsRepository.update(name, elements);
  }

  async countProducts(name: string) {
    return await this.productsRepository.count({ where: { name } });
  }

  async clone(id: number) {
    const clone = await this.productsRepository.find({
      select: [
        'thumbnail',
        'name',
        'price',
        'igredients',
        'disponibility',
        'volume',
        'others',
      ],
      where: {
        id: id,
      },
    });

    return this.productsRepository.create(clone);
  }
}
