import Concessionaria  from "./Concessionaria";
import Pessoa  from "./Pessoa";
import Moto  from "./Moto";
import Carro  from "./Carro";

//import { ConcessionariaDAO }  from "./ConcessionariaDAO";
//import { PessoaDAO }  from "./PessoaDAO";
//import { CarroDAO }  from "./CarroDAO";
//import { MotoDAO }  from "./MotoDAO";


import { Dao }  from "./Dao";

let concessionaria:Concessionaria = new Concessionaria("", []);
let pessoa:Pessoa = new Pessoa("", "");


let pessoaDao:Dao<Pessoa> = new Dao<Pessoa>();

pessoaDao.inserir(pessoa);

//let dao:ConcessionariaDAO = new ConcessionariaDAO();
//let concessionaria:Concessionaria = new Concessionaria("", []);

//dao.inserir(concessionaria);
//dao.atualizar(concessionaria);
//dao.remover(2);
//dao.selecionar(3);
//dao.selecionarTodos();


//let dao2:PessoaDAO = new PessoaDAO();
//let pessoa:Pessoa = new Pessoa("", "");

//dao2.inserir(pessoa);
//dao2.atualizar(pessoa);
//dao2.remover(2);
//dao2.selecionar(3);
//dao2.selecionarTodos();


//let dao3:CarroDAO = new CarroDAO();
//let carro:Carro = new Carro("", 0);

//dao3.inserir(carro);
//dao3.atualizar(carro);
//dao3.remover(2);
//dao3.selecionar(3);
//dao3.selecionarTodos();


//let dao4:MotoDAO = new MotoDAO();
//let moto:Moto = new Moto();

//dao4.inserir(moto);
//dao4.atualizar(moto);
//dao4.remover(2);
//dao4.selecionar(3);
//dao4.selecionarTodos();