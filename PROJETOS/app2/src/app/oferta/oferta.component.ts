import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';





@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasService]
})
export class OfertaComponent implements OnInit {

  oferta: Oferta;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then( (retorno: Oferta) => {
        this.oferta = retorno;
    })

   // console.log(this.route.snapshot.params['id'])

   //this.route.params.subscribe( (params: any) => {
      //console.log('parametro ', params.id)
   //});

  }

}
