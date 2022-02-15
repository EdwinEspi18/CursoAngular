import { Component } from '@angular/core';
import { IResponseData } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  termino: string = '';
  capitales: IResponseData[] = [];
  hayError: boolean = false;
  place: string = 'Buscar por capital....';

  constructor(private paisService: PaisesService) {}

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.paisService.getCapital(this.termino).subscribe({
      next: (capitales) => {
        this.capitales = capitales;
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
