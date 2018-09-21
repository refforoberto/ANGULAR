import { interfaceDAO } from './interfaceDAO';

export class Dao<T> implements interfaceDAO<T> {
    nomeTabela: '';

    inserir(object: T): boolean {
        console.log("Insert");
        return true;
    };
    atualizar(object: T): boolean {
        console.log("Update");
        return true;
    };
    remover(id: number): T {
        console.log("Delete");
        return Object();
    };
    selecionar(id: number): T {
        console.log("Get");
        return Object();
    };
    selecionarTodos(): Array<T> {
        console.log("GetAll");
        return [Object()];
    }
}