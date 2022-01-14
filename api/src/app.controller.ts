import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PharmacyService } from './service/pharmacy.service';
import { ProductsService } from './service/products.service';

@Controller()
export class AppController {
  constructor(
    private readonly pharmacyService: PharmacyService,
    private readonly productsService: ProductsService,
  ) {}

  @Post()
  async createPharmacy(@Body() pharmacy: any): Promise<any> {
    return this.pharmacyService.grpcService.create(pharmacy);
  }

  @Get(':cnpj')
  async getPharmacy(@Param('cnpj') cnpj: string): Promise<any> {
    return this.pharmacyService.grpcService.get(cnpj);
  }

  @Get()
  async findPharmacy(): Promise<any> {
    return this.pharmacyService.grpcService.find();
  }

  @Put(':cnpj')
  async updatePharmacy(
    @Param('cnpj') cnpj: string,
    @Body() elements: any,
  ): Promise<any> {
    return this.pharmacyService.grpcService.update(cnpj, elements);
  }

  @Delete('cnpj')
  async delPharmacy(@Param('cnpj') cnpj: string): Promise<any> {
    return this.pharmacyService.grpcService.del(cnpj);
  }

  @Post('/add/branchs')
  async addBranchs(@Body() pharmacy: any): Promise<any> {
    return this.pharmacyService.grpcService.add(pharmacy);
  }

  @Get('all/products')
  async findProducts(): Promise<any> {
    return this.productsService.grpcService.find();
  }

  @Post('create/products')
  async createProducts(@Body() products: any): Promise<any> {
    return this.productsService.grpcService.create(products);
  }

  @Get('/get/products/:name')
  async getProducts(@Param('name') name: string): Promise<any> {
    return this.productsService.grpcService.get(name);
  }

  @Put(':name')
  async updateProducts(
    @Param('name') name: string,
    @Body() elements: any,
  ): Promise<any> {
    return this.productsService.grpcService.update(name, elements);
  }

  @Delete('id')
  async delProducts(@Param('id') id: number): Promise<any> {
    return this.productsService.grpcService.del(id);
  }
}
