import { Module } from "@nestjs/common";
import { AddBranch } from "./useCases/addBranch";
import { DeletePharmacy } from "./useCases/deletePharmacy";
import { GetPharmacy } from "./useCases/getPharmacy";
import { ListPharmacy } from "./useCases/listPharmacy";
import { SavePharmacy } from "./useCases/savePharmacy";
import { UpdatePharmacy } from "./useCases/updatePharmacy";

@Module({
    providers: [SavePharmacy,AddBranch,DeletePharmacy,GetPharmacy,ListPharmacy,UpdatePharmacy],
    exports: [SavePharmacy,AddBranch,DeletePharmacy,GetPharmacy,ListPharmacy,UpdatePharmacy],
  })
  export class DomainModule {}