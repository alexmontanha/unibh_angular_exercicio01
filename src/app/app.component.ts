import { Component } from '@angular/core';
import { Dados } from './dados/dados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador de Pontos';

  dados = new Dados();


  incrementaNumero() {
    this.dados.numero++;
    console.log(this.dados.numero);
  }
}
