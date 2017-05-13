import {Route} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {ShopComponent} from './shop/shop.component'
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
    component: ShopComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]
