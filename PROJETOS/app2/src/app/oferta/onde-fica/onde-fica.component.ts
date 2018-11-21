import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';



@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  constructor(private route:ActivatedRoute, private ofertasService: OfertasService) { }

  ondeFica:string;


  ngOnInit() {

    this.ofertasService.getOndeFicaPorId(this.route.parent.snapshot.params.id)
        .then((resposta: string) => {
          this.ondeFica = resposta
        })
  }

}
