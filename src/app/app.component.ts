import { Component } from '@angular/core';
import {initializeApp, database} from 'firebase'
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {populateDatabase} from '../../populate-db'

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  products$: FirebaseListObservable<any>;
  lesson$: FirebaseObjectObservable<any>;
  firstCourse: any;
  constructor(db: AngularFireDatabase, afAuth: AngularFireAuth,){

    this.products$ = db.list('/Products');
    this.lesson$ = db.object('lessons/1');
    //const course$ = db.object('courses/-KjsPW_r5SPQJKwZy3ug');
    let q = this.products$.subscribe((val) => this.passData(val[0]));

    this.products$.subscribe(console.log);

  }

  listPush(){
    this.products$.push({description: 'TEST NEW COURSE'}).then(
      () => console.log('This Push Done'),
        console.error);
  }

  listUpdate(){
    this.products$.update(this.firstCourse, {description: 'Angular 2 HTTP Modified'}).then(()=> console.log('update complete'),
  console.error);
  }

  listRemove(){
    this.products$.remove(this.firstCourse).then(() => console.log("Removal Complete"),
  console.error);
  }

  passData(q) {
    this.firstCourse = q;
  }
  objUpdate() {
    this.lesson$.update({description: "New Description"}).then(()=> console.log("Finished Object Update"),
  console.error)
  }
  objSet(){
    this.lesson$.set({description: "New Description"}).then(()=> console.log('Finished setting Object'));
  }
  objRemove(){
    this.lesson$.remove().then(()=> console.log('Finished Removing Object'),
  console.error);
  }
}
