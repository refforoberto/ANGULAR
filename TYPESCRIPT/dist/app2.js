"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
// Criar carros
var carroA = new Carro_1.default('Gol', 4);
var carroB = new Carro_1.default('Corsa', 2);
var carroC = new Carro_1.default('Uno', 4);
// Criar Lista de Carros
var listaDeCarros = [carroA, carroB, carroC];
// Criar Concessionária
var concessionaria = new Concessionaria_1.default("Av. JK, 100", listaDeCarros);
// Exibir lista de carros
//console.log(concessionaria.mostrarListaDeCarros());
// Comprar Carro
var cliente = new Pessoa_1.default('Zé', 'Corsa');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerQueCarroTem());
