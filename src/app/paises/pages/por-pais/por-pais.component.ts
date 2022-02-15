import { Component } from '@angular/core';
import { Error, IResponseData } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  paises: IResponseData[] = [];
  hayError: boolean = false;
  place: string = 'Buscar por pais....';

  constructor(private paisService: PaisesService) {}

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.paisService.getPaises(this.termino).subscribe({
      next: (paises) => {
        this.paises = paises;
      },
      error: (err: Error) => {
        this.hayError = true;
        console.info(err);
      },
    });
  }

  sugerencias(valor: string) {
    this.hayError = false;
    //TODO: crear sugerencias
  }
}
