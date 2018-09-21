"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var CarroDAO /*implements interfaceDAO*/ = /** @class */ (function () {
    function CarroDAO() {
    }
    CarroDAO.prototype.inserir = function (object) {
        console.log("Insert Carro");
        return true;
    };
    ;
    CarroDAO.prototype.atualizar = function (object) {
        console.log("Update Carro");
        return true;
    };
    ;
    CarroDAO.prototype.remover = function (id) {
        console.log("Delete Carro");
        return null;
    };
    ;
    CarroDAO.prototype.selecionar = function (id) {
        console.log("Get Carro");
        return new Carro_1.default('', 0);
    };
    ;
    CarroDAO.prototype.selecionarTodos = function () {
        console.log("GetAll Carro ");
        return [new Carro_1.default('', 0)];
    };
    return CarroDAO;
}());
exports.CarroDAO = CarroDAO;
