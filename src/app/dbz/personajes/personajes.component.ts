import { Component, Input } from '@angular/core';
import { INuevo } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent {
  get personajes(): INuevo[] {
    return this.DbzService.personajes;
  }

  constructor(private DbzService: DbzService) {}
}
