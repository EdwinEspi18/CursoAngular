import { Component } from '@angular/core';
import { IResponseData } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  termino: string = '';
  region: IResponseData[] = [];
  hayError: boolean = false;
  place: string = 'Buscar por region....';

  constructor(private paisService: PaisesService) {}

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.paisService.getRegional(this.termino).subscribe({
      next: (region) => {
        this.region = region;
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
