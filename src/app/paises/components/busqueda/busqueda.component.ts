import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent implements OnInit {
  public termino: string = '';

  @Input() place: string = '';
  @Output() busqueda: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe((valor) => this.busqueda.emit(valor));
  }

  buscar() {
    this.busqueda.emit(this.termino);
  }
  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}