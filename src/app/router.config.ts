import {Route} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {ShopComponent} from './shop/shop.component'
import {NewProductComponent} from './new-product/new-product.component'


export const routerConfig: Route[] =[
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'addproduct',
    component: NewProductComponent
  },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
    ]
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]
