import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produtos } from './mock-produtos';
import { Produto } from './produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  getProd(): Observable<Produto[]> {
    const produtos = of(Produtos);
    return produtos;
  }
}
