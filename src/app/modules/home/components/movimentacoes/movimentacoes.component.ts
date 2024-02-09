import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovimentacaoModel } from 'src/app/models/movimentacao.model';
import { MovimentacoesService } from '../../services/movimentacoes.service';

@Component({
	selector: 'app-movimentacoes',
	templateUrl: './movimentacoes.component.html',
	styleUrls: ['./movimentacoes.component.scss'],
})
export class MovimentacoesComponent implements OnInit {
	movimentacoes$!: Observable<MovimentacaoModel[]>;

	constructor(private movimentacoesService: MovimentacoesService) {}

	ngOnInit(): void {
		this.movimentacoes$ = this.movimentacoesService.getMovimentacoes();
	}
}
