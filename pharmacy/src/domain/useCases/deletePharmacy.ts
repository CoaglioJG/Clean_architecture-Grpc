import { NotFoundException } from "@nestjs/common";
import { PharmacyRepository } from "../repositories/pharmacy.repository";

export class DeletePharmacy{
    constructor(private readonly pharmacyRepository: PharmacyRepository){}


    async call(cnpj: string){
        try{ 
            const alreadyExistPharmacy= await this.pharmacyRepository.findByCnpj(cnpj);

            if(alreadyExistPharmacy){
                return await this.pharmacyRepository.delete(cnpj);
            }else{
                return 'Pharmacy not exists'
            }
        }catch(error){
            throw new NotFoundException(error.message);
        }
    }
}