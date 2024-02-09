import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MovimentacaoComponent } from './components/movimentacao/movimentacao.component';
import { MovimentacoesComponent } from './components/movimentacoes/movimentacoes.component';
import { PromocaoComponent } from './components/promocao/promocao.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { HomeRoutingModule } from './home-routing.module';
import { MovimentacoesService } from './services/movimentacoes.service';
import { DefaultComponent } from './views/default/default.component';

@NgModule({
	declarations: [
		DefaultComponent,
		WidgetsComponent,
		PromocaoComponent,
		MovimentacoesComponent,
		MovimentacaoComponent,
	],
	imports: [CommonModule, HomeRoutingModule],
	providers: [MovimentacoesService],
})
export class HomeModule {}
