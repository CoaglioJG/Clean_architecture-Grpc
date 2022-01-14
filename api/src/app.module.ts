import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PharmacyService } from './service/pharmacy.service';
import { ProductsService } from './service/products.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PharmacyService, ProductsService],
})
export class AppModule {}
