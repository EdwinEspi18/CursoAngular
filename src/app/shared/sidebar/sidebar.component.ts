import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifService: GifsServiceService) {}

  get historial() {
    return [...this.gifService.historial];
  }

  buscarHistory(valor: string) {
    this.gifService.buscarGifs(valor);
  }
}
