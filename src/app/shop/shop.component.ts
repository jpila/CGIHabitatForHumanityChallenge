import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/model/products.service'
import {Product} from '../shared/model/product'
import {Observable} from "rxjs/Rx";
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database'

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products$: Observable<Product[]>;
  allProducts$: FirebaseListObservable<any[]>

  constructor(private productService: ProductsService, private db: AngularFireDatabase) { }

  ngOnInit() {
    console.log(this.productService);
    console.log(this.productService.findAllProducts())
    this.products$ = this.productService.findAllProducts();
    this.allProducts$ = this.db.list('/Products')
    return this.productService.findAllProducts()
  }

  removeFromDB(e){
    console.log(e);
    this.allProducts$.remove(e);
  }

}
