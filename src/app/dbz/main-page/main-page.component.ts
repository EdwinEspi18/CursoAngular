import { Component } from '@angular/core';
import { INuevo } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}
  nuevo: INuevo = { nombre: '', poder: 0 };
}
