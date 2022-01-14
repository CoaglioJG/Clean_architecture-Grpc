import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsRepository } from 'src/domain/repositories/products.repository';
import { ProductsEntity } from './entities/products.entity';
import { ProductsImpl } from './mariadb/products.impl';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  providers: [{ provide: ProductsRepository, useClass: ProductsImpl }],
  exports: [ProductsRepository],
})
export class DatabaseModule {}
