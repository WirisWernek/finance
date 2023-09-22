import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './components/card/card.component';
import { BalanceBarComponent } from './components/balance-bar/balance-bar.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, CardComponent, BalanceBarComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AplicationModule {}
