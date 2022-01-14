import { PharmacyRepository } from "../repositories/pharmacy.repository";

export class ListPharmacy{
    constructor(private readonly pharmacyRepository: PharmacyRepository){}

    async call(){
        try{ 
            const pharmacy = await this.pharmacyRepository.find();

            if(!pharmacy) return 'there are no registered pharmacies';

            return pharmacy;
        }catch(error){
            throw new Error(error.message)
        }

    }
}