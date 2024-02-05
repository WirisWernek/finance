import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultComponent } from './views/default/default.component';
import { WalletRoutingModule } from './wallet-routing.module';

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, WalletRoutingModule],
})
export class WalletModule {}
