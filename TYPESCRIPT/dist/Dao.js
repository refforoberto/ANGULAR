"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
    }
    Dao.prototype.inserir = function (object) {
        console.log("Insert");
        return true;
    };
    ;
    Dao.prototype.atualizar = function (object) {
        console.log("Update");
        return true;
    };
    ;
    Dao.prototype.remover = function (id) {
        console.log("Delete");
        return Object();
    };
    ;
    Dao.prototype.selecionar = function (id) {
        console.log("Get");
        return Object();
    };
    ;
    Dao.prototype.selecionarTodos = function () {
        console.log("GetAll");
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
