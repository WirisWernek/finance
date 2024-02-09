import { TipoMovimentacaoEnum } from "./enums/tipo-movimentacao.enum";
import { TipoServicoEnum } from "./enums/tipo-servico.enum";

export interface MovimentacaoModel {
	servico: string;
	valor: number;
	dia: Date;
	tipoServico: TipoServicoEnum;
	tipoMovimento: TipoMovimentacaoEnum;
}
