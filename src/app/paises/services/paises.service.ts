import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Error, IResponseData } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flags,population'
    );
  }

  getPaises(termino: string): Observable<IResponseData[]> {
    return this.http.get<IResponseData[]>(`${this.apiUrl}/name/${termino}`, {
      params: this.httpParams,
    });
  }
  getCapital(capital: string): Observable<IResponseData[]> {
    return this.http.get<IResponseData[]>(`${this.apiUrl}/capital/${capital}`, {
      params: this.httpParams,
    });
  }
  getRegional(region: string): Observable<IResponseData[]> {
    return this.http.get<IResponseData[]>(
      `${this.apiUrl}/regionalbloc/${region}`,
      { params: this.httpParams }
    );
  }
  getCodigo(codigo: string): Observable<IResponseData> {
    return this.http.get<IResponseData>(`${this.apiUrl}/alpha/${codigo}`);
  }
}
