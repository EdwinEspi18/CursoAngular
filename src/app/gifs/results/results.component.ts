import { Component } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  constructor(private gifsService: GifsServiceService) {}

  get resultados() {
    return this.gifsService.resultados;
  }
}
