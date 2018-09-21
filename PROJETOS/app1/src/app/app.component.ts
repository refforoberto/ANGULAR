import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true;
  public acaoEncerramento: string;

  public encerrarJogo(acao: string): void {    
    this.jogoEmAndamento = false;
    this.acaoEncerramento = acao;
  }

  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.acaoEncerramento = '';
  }
}
