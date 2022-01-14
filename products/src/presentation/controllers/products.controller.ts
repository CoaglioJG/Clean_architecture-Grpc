import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Products } from 'src/domain/modules/entities/products';
import { CloneProduct } from 'src/domain/useCases/cloneProduct';
import { DeleteProducts } from 'src/domain/useCases/deleteProducts';
import { GetProduct } from 'src/domain/useCases/getProduct';
import { ListProducts } from 'src/domain/useCases/listProducts';
import { SaveProducts } from 'src/domain/useCases/saveProducts';
import { UpdateProducts } from 'src/domain/useCases/updateProducts';

export class ProductsController {
  constructor(
    private readonly saveProducts: SaveProducts,
    private readonly updateProducts: UpdateProducts,
    private readonly deleteProducts: DeleteProducts,
    private readonly getProduct: GetProduct,
    private readonly listProducts: ListProducts,
    private readonly cloneProduct: CloneProduct,
  ) {}

  @Get()
  @GrpcMethod('ProductService', 'find')
  async listsProducts(): Promise<any> {
    return await this.listProducts.call();
  }

  @Get(':name')
  @GrpcMethod('ProductService', 'get')
  async Products(@Param('name') name: string): Promise<any> {
    return await this.getProduct.call(name);
  }

  @Post()
  @GrpcMethod('ProductService', 'create')
  async addProducts(@Body() products: Products): Promise<any> {
    return await this.saveProducts.call(products);
  }

  @Put(':name')
  @GrpcMethod('ProductService', 'update')
  async putProducts(
    @Param('name') name: string,
    @Body() elements: any,
  ): Promise<any> {
    return await this.updateProducts.call(name, elements);
  }

  @Delete('id')
  @GrpcMethod('ProductService', 'del')
  async delPharmacy(@Param('id') id: number): Promise<any> {
    return await this.deleteProducts.call(id);
  }

  @Post(':id')
  @GrpcMethod('ProductService', 'clone')
  async cloneProducts(@Param('id') id: number): Promise<any> {
    return await this.cloneProduct.call(id);
  }
}
