import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { HomeComponent } from './home/home.component';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/firebase.config'
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database'
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth'
import {RouterModule} from '@angular/router'
import {routerConfig} from './router.config'
import {ProductsService} from './shared/model/products.service';
import { ShopComponent } from './shop/shop.component'
import 'rxjs/add/operator/do';
import { FooterComponent } from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component'

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    SubHeaderComponent,
    HomeComponent,
    ShopComponent,
    FooterComponent,
    NewProductComponent,
    NewProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routerConfig),
    ReactiveFormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
