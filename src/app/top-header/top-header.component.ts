import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Observable} from "rxjs";
@Component({
  selector: 'top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
    products$: FirebaseListObservable<any>

  constructor(private db: AngularFireDatabase) {
      this.products$ = db.list('/Products')
      this.products$.subscribe(console.log)
   }

  ngOnInit() {
  }

  addNewProduct(){
    this.products$.push({
      description: "Green Kayak",
      location: "Oakville",
      price: "350",
      imgUrl: "http://media.supercheapauto.com.au/bcf/images/zooms/358758-zoom.JPG"
    }).then(
      console.log
    )
  }

}
