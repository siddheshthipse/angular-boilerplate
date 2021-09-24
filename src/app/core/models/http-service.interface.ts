import { Observable } from 'rxjs';

export interface HttpServiceModel<T> {
  getData(endpoint: string): Observable<T>;
  getSpecificData(endpoint: string): Observable<T>;
}
