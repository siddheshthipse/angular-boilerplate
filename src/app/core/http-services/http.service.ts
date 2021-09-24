import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpServiceModel } from '../models/http-service.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService<T> implements HttpServiceModel<T> {
  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<T> {
    return this.http.get<T>(endpoint);
  }

  getSpecificData(endpoint): Observable<T> {
    return this.http.get<T>(endpoint);
  }
}
