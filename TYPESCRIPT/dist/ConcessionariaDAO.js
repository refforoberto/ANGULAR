"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDAO /*implements interfaceDAO*/ = /** @class */ (function () {
    function ConcessionariaDAO() {
    }
    ConcessionariaDAO.prototype.inserir = function (object) {
        console.log("Insert");
        return true;
    };
    ;
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log("Update");
        return true;
    };
    ;
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log("Delete");
        return null;
    };
    ;
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log("Get");
        return new Concessionaria_1.default('', []);
    };
    ;
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log("GetAll");
        return [new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;
