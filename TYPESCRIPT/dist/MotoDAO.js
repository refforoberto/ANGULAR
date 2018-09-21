"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = require("./Moto");
var MotoDAO /*implements interfaceDAO*/ = /** @class */ (function () {
    function MotoDAO() {
    }
    MotoDAO.prototype.inserir = function (object) {
        console.log("Insert Moto");
        return true;
    };
    ;
    MotoDAO.prototype.atualizar = function (object) {
        console.log("Update Moto");
        return true;
    };
    ;
    MotoDAO.prototype.remover = function (id) {
        console.log("Delete Moto");
        return null;
    };
    ;
    MotoDAO.prototype.selecionar = function (id) {
        console.log("Get Moto");
        return new Moto_1.default();
    };
    ;
    MotoDAO.prototype.selecionarTodos = function () {
        console.log("GetAll Moto ");
        return [new Moto_1.default()];
    };
    return MotoDAO;
}());
exports.MotoDAO = MotoDAO;
