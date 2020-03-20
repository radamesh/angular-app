import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'
import { ApiService } from '../api.service';
@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.scss']
})
export class ProdutoEditarComponent implements OnInit {
  _id: String = ''
  productForm: FormGroup
  nome_produto: String = ''
  desc_produto: String = ''
  preco_produto: number = null
  isLoadResults = false

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuider: FormBuilder) { }

  ngOnInit() {
    this.getProduto(this.route.snapshot.params['id'])
    this.productForm = this.formBuider.group({
      'nome_produto': [null, Validators.required],
      'desc_produto': [null, Validators.required],
      'preco_produto': [null, Validators.required]
    })
  }

  getProduto(id) {

  }

  updateProduto() {

  }
}
