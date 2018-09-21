"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var PessoaDAO /*implements interfaceDAO*/ = /** @class */ (function () {
    function PessoaDAO() {
    }
    PessoaDAO.prototype.inserir = function (object) {
        console.log("Insert Pessoa");
        return true;
    };
    ;
    PessoaDAO.prototype.atualizar = function (object) {
        console.log("Update Pessoa");
        return true;
    };
    ;
    PessoaDAO.prototype.remover = function (id) {
        console.log("Delete Pessoa");
        return null;
    };
    ;
    PessoaDAO.prototype.selecionar = function (id) {
        console.log("Get Pessoa");
        return new Pessoa_1.default('', '');
    };
    ;
    PessoaDAO.prototype.selecionarTodos = function () {
        console.log("GetAll Pessoa ");
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDAO;
}());
exports.PessoaDAO = PessoaDAO;
