import { Observable } from 'rxjs';

export interface IGrpcProductsService {
  create(RegisterProducts: any): Observable<any>;
  get(name: string): Observable<any>;
  update(name: string, elements: any): Observable<any>;
  del(id: number): Observable<any>;
  clone(id: number): Observable<any>;
  find(): Observable<any>;
}
