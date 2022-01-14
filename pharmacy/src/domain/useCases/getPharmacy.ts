import { PharmacyRepository } from "../repositories/pharmacy.repository";

export class GetPharmacy{
    constructor(private readonly pharmacyRepository: PharmacyRepository){}

    async call(cnpj: string){
        try{ 
            const pharmacy = await this.pharmacyRepository.findByCnpj(cnpj);

            if(!pharmacy) return 'pharmacy not found';

            return pharmacy;
        }catch(error){
            throw new Error(error.message)
        }

    }
}