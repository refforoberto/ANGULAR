import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';



@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  constructor( private ofertasService: OfertasService) { }

  ofertas: Oferta[];

  ngOnInit() {

    this.ofertasService.getOfertasPorCategoria('diversao')
        .then((ofertas: any) => {
            this.ofertas = ofertas;
        })
  }

}
