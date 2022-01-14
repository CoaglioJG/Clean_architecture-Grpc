import { BadRequestException } from "@nestjs/common";
import { PharmacyRepository } from "../repositories/pharmacy.repository";

export class UpdatePharmacy{
    constructor(private readonly pharmacyRepository: PharmacyRepository){}

    async call(cnpj: string,elements: Object){
        try{ 
            return await this.pharmacyRepository.update(cnpj,elements);
        }catch(error){
            throw new BadRequestException(error.message);
        }
    }
}