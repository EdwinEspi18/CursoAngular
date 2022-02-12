import { Injectable } from '@angular/core';
import { INuevo } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: INuevo[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  public get personajes(): INuevo[] {
    return [...this._personajes];
  }

  public set agregarPersonajes(v: INuevo) {
    this._personajes.push(v);
  }
  constructor() {
    console.log('Servicio listo para usar');
  }
}
