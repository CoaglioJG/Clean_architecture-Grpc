import { OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptionPharmacy } from 'src/grpc.option';
import { IGrpcPharmacyService } from 'src/interface/grpcPharmacy.interface';

export class PharmacyService implements OnModuleInit {
  @Client(microserviceOptionPharmacy)
  private clientPharmacy: ClientGrpc;

  public grpcService: IGrpcPharmacyService;

  onModuleInit() {
    this.grpcService =
      this.clientPharmacy.getClientByServiceName<IGrpcPharmacyService>(
        'PharmacyService',
      );
  }
}
