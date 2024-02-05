import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TransferRoutingModule } from './transfer-routing.module';
import { DefaultComponent } from './views/default/default.component';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    TransferRoutingModule
  ]
})
export class TransferModule { }
