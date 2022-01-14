import { BadRequestException } from "@nestjs/common";
import { Pharmacy } from "../modules/entities/pharmacy";
import { PharmacyRepository } from "../repositories/pharmacy.repository";

export class SavePharmacy{
    constructor(private readonly pharmacyRepository: PharmacyRepository){}

    async call(pharmacy:Pharmacy){
        try{ 
            const alreadyExistPharmacy = await this.pharmacyRepository.findByCnpj(pharmacy.cnpj)

            if(!alreadyExistPharmacy){
                return await this.pharmacyRepository.save(pharmacy)
            }else{
                return 'Pharmacy already exists'
            }
        }catch(error){
            throw new BadRequestException(error.message)
        }
    }
}