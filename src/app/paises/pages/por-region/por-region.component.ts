import { Component } from '@angular/core';
import { IResponseData } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  paises: IResponseData[] = [];
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  regionActiva: string = '';
  constructor(private paisService: PaisesService) {}
  activarRegion(region: string) {
    this.regionActiva = region;

    if (region === this.regionActiva) {
      return;
    }
    this.paisService
      .getRegional(this.regionActiva)
      .subscribe((paises) => (this.paises = paises));
  }

  get porRegion(): IResponseData[] {
    return this.paises;
  }
  getClass(region: string) {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
