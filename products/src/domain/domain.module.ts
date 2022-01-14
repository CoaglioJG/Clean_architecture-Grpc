import { Module } from '@nestjs/common';
import { CloneProduct } from './useCases/cloneProduct';
import { DeleteProducts } from './useCases/deleteProducts';
import { GetProduct } from './useCases/getProduct';
import { ListProducts } from './useCases/listProducts';
import { SaveProducts } from './useCases/saveProducts';
import { UpdateProducts } from './useCases/updateProducts';

@Module({
  providers: [
    DeleteProducts,
    GetProduct,
    ListProducts,
    SaveProducts,
    UpdateProducts,
    CloneProduct,
  ],
  exports: [
    DeleteProducts,
    GetProduct,
    ListProducts,
    SaveProducts,
    UpdateProducts,
    CloneProduct,
  ],
})
export class DomainModule {}
