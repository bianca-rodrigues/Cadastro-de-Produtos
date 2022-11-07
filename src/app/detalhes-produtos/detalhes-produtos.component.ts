import { Component, Input} from '@angular/core';
import { Produto } from '../produtos.model';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent{
 @Input() prod?: Produto;

}
