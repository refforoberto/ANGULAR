import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FRASES } from './frases-mock';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase:Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() { 
      this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta( resposta: Event ):void  {
      this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
        if(this.resposta === this.rodadaFrase.frasePtBr) {  
            this.rodada++;          
            this.progresso =  this.progresso + (100 / this.frases.length);  

            if(this.rodada === this.frases.length) {
                this.encerrarJogo.emit("vitoria");
            }           
            
            this.atualizaRodada();

        } else {
            this.tentativas--;

            if(this.tentativas === -1) {
               this.encerrarJogo.emit("derrota");
            }         
        }
  }

  private atualizaRodada() : void {
       
      this.rodadaFrase = this.frases[this.rodada];
      this.resposta = '';
  }


}
