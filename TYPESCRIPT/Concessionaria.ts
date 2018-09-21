import Carro from './Carro';
import { ConcessionariaInterface } from './ConcessionariaInterface';

export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string;
    private listaDeCarros: Carro[];

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaDeCarros;
    }

    public fornecerHorarioDeFuncionamento(): string {
        return "De Segunda à Sexta das 08:00 às 18:00 e Sábado das 08:00 às 12:00";
    }
}