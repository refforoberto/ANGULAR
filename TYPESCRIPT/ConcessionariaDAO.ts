import Concessionaria  from "./Concessionaria";
import { interfaceDAO } from "./interfaceDAO";

export class ConcessionariaDAO /*implements interfaceDAO*/ {

    nomeTabela: 'tbl_concessionaria';

    inserir(object: Concessionaria): boolean {
        console.log("Insert");
        return true;
    };
    atualizar(object: Concessionaria): boolean {
        console.log("Update");
        return true;
    };
    remover(id: number): any {
        console.log("Delete");
        return null;
    };
    selecionar(id: number): Concessionaria {
        console.log("Get");
        return new Concessionaria('', []);
    };
    selecionarTodos(): Array<Concessionaria> {
        console.log("GetAll");
        return [new Concessionaria('', [])];
    }
}