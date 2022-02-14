import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private gifService: GifsServiceService) {}
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    const valor: string = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.gifService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
