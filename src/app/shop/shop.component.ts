import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/model/products.service'
import {Product} from '../shared/model/product'
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    console.log(this.productService);
    console.log(this.productService.findAllProducts())
    this.products$ = this.productService.findAllProducts();
    return this.productService.findAllProducts()
  }
}
