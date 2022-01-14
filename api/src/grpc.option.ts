import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptionPharmacy: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'pharmacy',
    protoPath: join(__dirname, '../src/protob/pharmacy.proto'),
  },
};

export const microserviceOptionProducts: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'products',
    protoPath: join(__dirname, '../src/protob/products.proto'),
  },
};
