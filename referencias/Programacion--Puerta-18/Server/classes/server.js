"use strict";
exports.__esModule = true;
exports.Servidor = void 0;
var express_1 = require("express");
var environment_1 = require("../global/environment");
var Servidor = /** @class */ (function () {
    function Servidor() {
        this.app = (0, express_1["default"])();
        this.port = environment_1.SERVER_PORT;
    }
    Servidor.prototype.start = function (callback) {
        this.app.listen(this.port, callback());
    };
    return Servidor;
}());
exports.Servidor = Servidor;
