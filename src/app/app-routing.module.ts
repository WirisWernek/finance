import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
	loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'transfer',
    component: LayoutComponent,
	loadChildren: () => import('./modules/transfer/transfer.module').then((m) => m.TransferModule),
  },
  {
    path: 'wallet',
    component: LayoutComponent,
	loadChildren: () => import('./modules/wallet/wallet.module').then((m) => m.WalletModule),
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
	loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      anchorScrolling: 'enabled',
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
