import { Pharmacy } from "../modules/entities/pharmacy";

export abstract class PharmacyRepository{
  save: (pharmacy: Pharmacy) => Promise<Pharmacy>;
  findByCnpj: (cnpj: string) => Promise<Pharmacy>;
  delete:(cnpj: string)=> Promise<any>;
  update:(cnpj: string, elements: Object)=> Promise<Pharmacy>;
  saveBranch:(pharmacy:Pharmacy)=> Promise<Pharmacy>;
  getBranches:(cnpj: string)=> Promise<Pharmacy[]>
  find:()=> Promise<Pharmacy[]>
}