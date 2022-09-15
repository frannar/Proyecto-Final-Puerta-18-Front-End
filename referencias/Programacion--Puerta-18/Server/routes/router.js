"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
exports.router = (0, express_1.Router)();
var socies = [
    {
        nombre: 'Nahuel',
        apellido: 'Heredia',
        nick: "N4hu3l",
        edad: 22
    },
    {
        nombre: 'Irina',
        apellido: 'Davico',
        nick: 'Ir1n4',
        edad: 21
    },
    {
        nombre: 'John',
        apellido: 'Maza',
        nick: 'J0hny',
        edad: 20
    }
];
exports.router.get('/socies', function (req, res) {
    res.json({
        ok: true,
        socies: socies
    });
});
exports.router.get('/socie/:nick', function (req, res) {
    var ficha = { nombre: "", apellido: "", nick: "", edad: 0 };
    socies.forEach(function (socie) {
        if (socie.nick === req.params.nick) {
            ficha = socie;
        }
    });
    res.json({
        ok: true,
        socie: ficha
    });
});
