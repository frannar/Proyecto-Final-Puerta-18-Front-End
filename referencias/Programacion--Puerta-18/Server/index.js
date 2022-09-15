"use strict";
exports.__esModule = true;
var server_1 = require("./classes/server");
var router_1 = require("./routes/router");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var server = new server_1.Servidor();
server.app.use(body_parser_1["default"].urlencoded({
    extended: true
}));
server.app.use(body_parser_1["default"].json());
server.app.use((0, cors_1["default"])({ origin: true, credentials: true }));
// Credenciales de seguridad
server.app.use('/', router_1.router);
server.start(function () {
    console.log("servidor corriendo en " + server.port);
});
