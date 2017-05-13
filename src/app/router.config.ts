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
    path: 'shop',
    component: ShopComponent,
    children: [
      {
        path: 'addproduct',
        component: NewProductComponent
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]
