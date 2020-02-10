import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Produto } from 'src/model/produto'
@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {
  produto: Produto = {_id: '', nome_produto: '', desc_produto: '', preco_produto: null, dt_atualizacao: null}
  isLoadResults = true
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getProduto(this.route.snapshot.params['id'])
  }

}
