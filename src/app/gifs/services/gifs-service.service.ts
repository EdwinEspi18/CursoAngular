import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifsDataResponse';

@Injectable({
  providedIn: 'root',
})
export class GifsServiceService {
  private apiKey: string = 'X4uDs4YEaLA16Rvf23L2U5w1J19F3rVe';
  private urlApi: string = 'https://api.giphy.com/v1/gifs/search';
  private _hitorial: string[] = [];
  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    if (window.localStorage.getItem('historial')) {
      this._hitorial = JSON.parse(window.localStorage.getItem('historial')!);
    }
    if (window.localStorage.getItem('resultados')) {
      this.resultados = JSON.parse(window.localStorage.getItem('resultados')!);
    }
  }

  get historial() {
    return [...this._hitorial];
  }

  buscarGifs(query: string) {
    if (!this._hitorial.includes(query)) this._hitorial.unshift(query);
    window.localStorage.setItem(
      'historial',
      window.JSON.stringify(this._hitorial)
    );
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10');

    this.http
      .get<SearchGifsResponse>(`${this.urlApi}`, { params })
      .subscribe((response) => {
        this.resultados = response.data;
        window.localStorage.setItem(
          'resultados',
          window.JSON.stringify(this.resultados)
        );
        console.log(response);
      });
  }
}
