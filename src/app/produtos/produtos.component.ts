import { Component, OnInit } from '@angular/core';
import { Produtos } from '../mock-produtos';
import { Produto } from '../produtos.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  prod: Produto = {
    id: 1,
    nome: 'arroz',
    preco: 15.90,
    quant: 50
  };

  produtos = Produtos;

  constructor() { }

  ngOnInit(): void {
  }

}
