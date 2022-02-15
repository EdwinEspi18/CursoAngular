import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { IResponseData } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  codigo: string = '';
  pais!: IResponseData;
  constructor(
    private route: ActivatedRoute,
    private paisService: PaisesService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({ codigo }) => this.paisService.getCodigo(codigo)),
        tap(console.log)
      )
      .subscribe((pais) => (this.pais = pais));
    /* this.route.params.subscribe((params) => {
      this.codigo = params['codigo'];
      this.paisService.getCodigo(this.codigo).subscribe((pais) => {
        console.log(pais);
      });
    }); */
  }
}
