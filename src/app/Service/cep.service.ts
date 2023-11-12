
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from '../environment/environments';

@Injectable({
  providedIn: 'root',
})
export class CepService {
 

  constructor(private http: HttpClient) {}

  getCepInfo(cep: string): Observable<any> {
    const url = `${environments.apiUrl}/${cep}`;
    return this.http.get(url);
  }
}
