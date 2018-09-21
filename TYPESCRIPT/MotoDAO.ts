import Moto  from "./Moto";
import { interfaceDAO } from "./interfaceDAO";

export class MotoDAO /*implements interfaceDAO*/ {

    nomeTabela: 'tbl_Moto';

    inserir(object: Moto): boolean {
        console.log("Insert Moto");
        return true;
    };
    atualizar(object: Moto): boolean {
        console.log("Update Moto");
        return true;
    };
    remover(id: number): any {
        console.log("Delete Moto");
        return null;
    };
    selecionar(id: number): Moto {
        console.log("Get Moto");
        return new Moto();
    };
    selecionarTodos(): Array<Moto> {
        console.log("GetAll Moto ");
        return [new Moto()];
    }
}