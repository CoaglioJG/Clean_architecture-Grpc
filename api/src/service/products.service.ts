import { OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptionProducts } from 'src/grpc.option';
import { IGrpcProductsService } from 'src/interface/grpcProducts.interface';

export class ProductsService implements OnModuleInit {
  @Client(microserviceOptionProducts)
  private clientProducts: ClientGrpc;

  public grpcService: IGrpcProductsService;

  onModuleInit() {
    this.grpcService =
      this.clientProducts.getClientByServiceName<IGrpcProductsService>(
        'ProductService',
      );
  }
}
