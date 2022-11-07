import { Component, OnInit } from '@angular/core';
import { Produtos } from '../mock-produtos';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produtos.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos = Produto[]= [];
  selectedProd?: Produto;

  onSelect(prod: Produto): void {
    this.selectedProd = prod;
  }

  constructor(private produtoService: ProdutoService ) { }

  ngOnInit(): void {
    this.getProd();
  }

  getProd(): void {
    this.produtos = this.produtoService.getProd();
  }
}
