import Carro  from "./Carro";
import { interfaceDAO } from "./interfaceDAO";

export class CarroDAO /*implements interfaceDAO*/ {

    nomeTabela: 'tbl_Carro';

    inserir(object: Carro): boolean {
        console.log("Insert Carro");
        return true;
    };
    atualizar(object: Carro): boolean {
        console.log("Update Carro");
        return true;
    };
    remover(id: number): any {
        console.log("Delete Carro");
        return null;
    };
    selecionar(id: number): Carro {
        console.log("Get Carro");
        return new Carro('', 0);
    };
    selecionarTodos(): Array<Carro> {
        console.log("GetAll Carro ");
        return [new Carro('', 0)];
    }
}