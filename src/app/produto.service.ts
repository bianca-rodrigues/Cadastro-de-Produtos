import { Injectable } from '@angular/core';
import { Produtos } from './mock-produtos';
import { Produto } from './produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  getProd(): Produto[] {
    return Produtos;
  }
}
