import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Error, IResponseData } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private apiUrl: string = 'https://restcountries.com/v2';
  constructor(private http: HttpClient) {}

  getPaises(termino: string): Observable<IResponseData[]> {
    return this.http.get<IResponseData[]>(`${this.apiUrl}/name/${termino}`);
  }
  getCapital(capital: string): Observable<IResponseData[]> {
    return this.http.get<IResponseData[]>(`${this.apiUrl}/capital/${capital}`);
  }
  getRegional(region: string): Observable<IResponseData[]> {
    return this.http.get<IResponseData[]>(`${this.apiUrl}/continent/${region}`);
  }
  getCodigo(codigo: string): Observable<IResponseData> {
    return this.http.get<IResponseData>(`${this.apiUrl}/alpha/${codigo}`);
  }
}
