import { InjectRepository } from "@nestjs/typeorm";
import { Pharmacy } from "src/domain/modules/entities/pharmacy";
import { PharmacyRepository } from "src/domain/repositories/pharmacy.repository";
import { Repository } from "typeorm";
import { PharmacyEntity } from "../entities/pharmacy.entity";

export class PharmacyImpl implements PharmacyRepository {
    constructor(
      @InjectRepository(PharmacyEntity)
      private readonly pharmacyRepository: Repository<PharmacyEntity>,
    ) {}
    async save(pharmacy: PharmacyEntity): Promise<PharmacyEntity> {
      return await this.pharmacyRepository.save(pharmacy);
    }

    async find(): Promise<PharmacyEntity[]> {
      return await this.pharmacyRepository.find();
    }
  
    async findByCnpj(cnpj: string): Promise<PharmacyEntity> {
      return await this.pharmacyRepository.findOneOrFail(cnpj);
    }

    async delete(cnpj:string): Promise<any>{
      return await this.pharmacyRepository.delete(cnpj);
    }

    async update(cnpj:string, elements: Object): Promise<any>{
      return await this.pharmacyRepository.update(cnpj, elements);
    }

    async saveBranch(pharmacy:Pharmacy): Promise<any>{
      const countFilial = await this.pharmacyRepository.count({
        where: {
          cnpjMatriz: pharmacy.cnpjMatriz 
        }
      })

      if(countFilial > 3) return 'This pharmacy already has the maximum number of branches'

      return await this.pharmacyRepository.save(pharmacy)
    }

    async getBranches(cnpj: string): Promise<PharmacyEntity[]>{
      return await this.pharmacyRepository.find({
        where:{
          cnpjMatriz:cnpj
        }
      })
    }

  }