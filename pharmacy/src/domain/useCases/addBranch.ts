import { Pharmacy } from "../modules/entities/pharmacy";
import { PharmacyRepository } from "../repositories/pharmacy.repository";

export class AddBranch{
    constructor(private readonly pharmacyRepository: PharmacyRepository){}

    async call(pharmacy:Pharmacy){
        try{
            const alreadyExistBranch = await this.pharmacyRepository.findByCnpj(pharmacy.cnpj)

            if(alreadyExistBranch) return 'branch already exists'

            return await this.pharmacyRepository.saveBranch(pharmacy)
        }catch(error) {
            throw new Error(error.message)
        }
    }
}