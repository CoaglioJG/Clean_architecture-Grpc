import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Pharmacy } from 'src/domain/modules/entities/pharmacy';
import { AddBranch } from 'src/domain/useCases/addBranch';
import { DeletePharmacy } from 'src/domain/useCases/deletePharmacy';
import { GetPharmacy } from 'src/domain/useCases/getPharmacy';
import { ListPharmacy } from 'src/domain/useCases/listPharmacy';
import { SavePharmacy } from 'src/domain/useCases/savePharmacy';
import { UpdatePharmacy } from 'src/domain/useCases/updatePharmacy';

@Controller('pharmacy')
export class PharmacyController {
  constructor(
    private readonly savePharmacy: SavePharmacy,
    private readonly updatePharmacy: UpdatePharmacy,
    private readonly deletePharmacy: DeletePharmacy,
    private readonly getPharmacy: GetPharmacy,
    private readonly addBranch: AddBranch,
    private readonly listPharmacy: ListPharmacy,
  ) {}

  @Get()
  @GrpcMethod('ProductService', 'find')
  async listsPharmacy(): Promise<any> {
    return await this.listPharmacy.call();
  }

  @Get(':cnpj')
  @GrpcMethod('ProductService', 'get')
  async Pharmacy(@Param('cnpj') cnpj: string): Promise<any> {
    return await this.getPharmacy.call(cnpj);
  }

  @Post()
  @GrpcMethod('ProductService', 'create')
  async addPharmacy(@Body() pharmacy: Pharmacy): Promise<any> {
    return await this.savePharmacy.call(pharmacy);
  }

  @Put(':cnpj')
  @GrpcMethod('ProductService', 'update')
  async putPharmacy(
    @Param('cnpj') cnpj: string,
    @Body() elements: any,
  ): Promise<any> {
    return await this.updatePharmacy.call(cnpj, elements);
  }

  @Delete('cnpj')
  @GrpcMethod('ProductService', 'del')
  async delPharmacy(@Param('cnpj') cnpj: string): Promise<any> {
    return await this.deletePharmacy.call(cnpj);
  }

  @Post('/add/branchs')
  @GrpcMethod('ProductService', 'add')
  async addBranchs(@Body() pharmacy: Pharmacy): Promise<any> {
    return await this.addBranch.call(pharmacy);
  }
}
