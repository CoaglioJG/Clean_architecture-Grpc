import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PharmacyRepository } from "src/domain/repositories/pharmacy.repository";
import { PharmacyEntity } from "./entities/pharmacy.entity";
import { PharmacyImpl } from "./mariadb/pharmacy.impl";

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      PharmacyEntity
    ]),
  ],
  providers: [
    { provide: PharmacyRepository, useClass: PharmacyImpl },
  ],
  exports: [
    PharmacyRepository
  ],
})
export class DatabaseModule {}