import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {PricingComponent} from './pricing/pricing.component';
import {ServicesComponent} from './services/services.component';
import {MainBannerComponent} from './main-banner/main-banner.component';
import {ContactsComponent} from './contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'pricing',
        component: PricingComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'main',
        component: MainBannerComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
