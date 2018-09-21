import Carro from './Carro';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';

// Criar carros
let carroA = new Carro('Gol', 4);
let carroB = new Carro('Corsa', 2);
let carroC = new Carro('Uno', 4);

// Criar Lista de Carros
let listaDeCarros: Carro[] = [carroA, carroB, carroC];

// Criar Concessionária
let concessionaria = new Concessionaria("Av. JK, 100", listaDeCarros);


// Exibir lista de carros
//console.log(concessionaria.mostrarListaDeCarros());

// Comprar Carro
let cliente = new Pessoa('Zé', 'Corsa');

concessionaria.mostrarListaDeCarros().map((carro:Carro) => {
    if(carro['modelo'] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerQueCarroTem());