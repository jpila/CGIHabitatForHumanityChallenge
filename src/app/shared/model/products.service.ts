import { Injectable } from '@angular/core';
import {Product} from './product'
import {Observable} from 'rxjs/Rx'
import { AngularFireDatabaseModule,
        AngularFireDatabase,
        FirebaseListObservable,
        FirebaseObjectObservable} from 'angularfire2/database'

@Injectable()
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }


  findAllProducts(): Observable<Product[]>{
    return this.db.list('Products');
  }
}
