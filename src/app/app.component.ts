import { Component } from '@angular/core';
interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  profissao: string;
  sexo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'dropdown-actions';
  pessoas: Pessoa[]; 

  constructor(){
    this.pessoas = [
      {
          id: 1,
          nome: "João",
          idade: 30,
          profissao: "Engenheiro",
          sexo: "Masculino"
      },
      {
          id: 2,
          nome: "Maria",
          idade: 25,
          profissao: "Médica",
          sexo: "Feminino"
      },
      {
          id: 3,
          nome: "Carlos",
          idade: 40,
          profissao: "Advogado",
          sexo: "Masculino"
      },
      {
          id: 4,
          nome: "Ana",
          idade: 35,
          profissao: "Professor",
          sexo: "Feminino"
      },
      {
          id: 5,
          nome: "Pedro",
          idade: 28,
          profissao: "Programador",
          sexo: "Masculino"
      }
    ];
  }
}
