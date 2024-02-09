import { Component, Input } from '@angular/core';
import { MovimentacaoModel } from 'src/app/models/movimentacao.model';

@Component({
	selector: 'app-movimentacao',
	templateUrl: './movimentacao.component.html',
	styleUrls: ['./movimentacao.component.scss'],
})
export class MovimentacaoComponent {
	@Input() movimentacao!: MovimentacaoModel;
}
