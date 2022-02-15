import { Component, Input } from '@angular/core';
import { IResponseData } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() paises: IResponseData[] = [];
  constructor() {}
}
