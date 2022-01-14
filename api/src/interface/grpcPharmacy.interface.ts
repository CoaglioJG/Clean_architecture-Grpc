import { Observable } from 'rxjs';

export interface IGrpcPharmacyService {
  create(RegisterPharmacy: any): Observable<any>;
  get(cnpj: string): Observable<any>;
  update(cnpj: string, elements: any): Observable<any>;
  del(cnpj: string): Observable<any>;
  add(RegisterPharmacy: any): Observable<any>;
  find(): Observable<any>;
}
