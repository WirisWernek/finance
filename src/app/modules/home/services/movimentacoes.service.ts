import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TipoMovimentacaoEnum } from 'src/app/models/enums/tipo-movimentacao.enum';
import { TipoServicoEnum } from 'src/app/models/enums/tipo-servico.enum';
import { MovimentacaoModel } from 'src/app/models/movimentacao.model';

@Injectable()
export class MovimentacoesService implements OnInit {
	private movimentacoes$!: BehaviorSubject<MovimentacaoModel[]>;

	constructor() {
		this.movimentacoes$ = new BehaviorSubject(this.loadData())
	}

	ngOnInit(): void {
		// this.loadData();
	}

	private loadData(): MovimentacaoModel[] {
		return [
			{
				servico: 'Netflix',
				tipoMovimento: TipoMovimentacaoEnum.ENTRADA,
				valor: 45,
				dia: new Date(),
				tipoServico: TipoServicoEnum.ENTRETERIMENTO,
			},
			{
				servico: 'Amazon',
				tipoMovimento: TipoMovimentacaoEnum.ENTRADA,
				valor: 45,
				dia: new Date(),
				tipoServico: TipoServicoEnum.VAREJO,
			},
			{
				servico: 'Supermercado Rodrigues',
				tipoMovimento: TipoMovimentacaoEnum.ENTRADA,
				valor: 45,
				dia: new Date(),
				tipoServico: TipoServicoEnum.ALIMENTACAO,
			},
			{
				servico: 'Farmácia Rede Farmes',
				tipoMovimento: TipoMovimentacaoEnum.ENTRADA,
				valor: 45,
				dia: new Date(),
				tipoServico: TipoServicoEnum.SAUDE,
			},
			{
				servico: 'Mercado Livre',
				tipoMovimento: TipoMovimentacaoEnum.ENTRADA,
				valor: 45,
				dia: new Date(),
				tipoServico: TipoServicoEnum.VAREJO,
			},
			{
				servico: 'HBO Max',
				tipoMovimento: TipoMovimentacaoEnum.ENTRADA,
				valor: 45,
				dia: new Date(),
				tipoServico: TipoServicoEnum.ENTRETERIMENTO,
			},
			{
				servico: 'Digital Net',
				tipoMovimento: TipoMovimentacaoEnum.ENTRADA,
				valor: 45,
				dia: new Date(),
				tipoServico: TipoServicoEnum.VAREJO,
			},
			{
				servico: 'Saraiva',
				tipoMovimento: TipoMovimentacaoEnum.ENTRADA,
				valor: 45,
				dia: new Date(),
				tipoServico: TipoServicoEnum.EDUCACAO,
			},
			{
				servico: 'Spotify',
				tipoMovimento: TipoMovimentacaoEnum.ENTRADA,
				valor: 45,
				dia: new Date(),
				tipoServico: TipoServicoEnum.ENTRETERIMENTO,
			},
			{
				servico: 'Apple TV',
				tipoMovimento: TipoMovimentacaoEnum.ENTRADA,
				valor: 45,
				dia: new Date(),
				tipoServico: TipoServicoEnum.ENTRETERIMENTO,
			},
		];
	}

	getMovimentacoes(): Observable<MovimentacaoModel[]> {
		this.loadData();
		console.log(this.movimentacoes$.asObservable());
		return this.movimentacoes$.asObservable();
	}
}
