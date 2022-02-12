import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INuevo } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent {
  @Input('data') personajes: INuevo = {
    nombre: '',
    poder: 0,
  };

  nuevo: INuevo = {
    poder: 0,
    nombre: '',
  };

  /*   @Output() onNewCharacter: EventEmitter<INuevo> = new EventEmitter(); */

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.dbzService.agregarPersonajes = this.nuevo;
    this.nuevo = {
      poder: 0,
      nombre: '',
    };
  }
  constructor(private dbzService: DbzService) {}
}
