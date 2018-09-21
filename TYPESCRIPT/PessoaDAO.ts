import Pessoa  from "./Pessoa";
import { interfaceDAO } from "./interfaceDAO";

export class PessoaDAO /*implements interfaceDAO*/ {

    nomeTabela: 'tbl_pessoa';

    inserir(object: Pessoa): boolean {
        console.log("Insert Pessoa");
        return true;
    };
    atualizar(object: Pessoa): boolean {
        console.log("Update Pessoa");
        return true;
    };
    remover(id: number): any {
        console.log("Delete Pessoa");
        return null;
    };
    selecionar(id: number): Pessoa {
        console.log("Get Pessoa");
        return new Pessoa('', '');
    };
    selecionarTodos(): Array<Pessoa> {
        console.log("GetAll Pessoa ");
        return [new Pessoa('', '')];
    }
}