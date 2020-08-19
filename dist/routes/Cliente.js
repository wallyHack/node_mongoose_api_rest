"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _client = require("./../controllers/client.controller");

var router = (0, _express.Router)();
// ruta que agrega el registro de un cliente con POST
router.get('/', _client.getClients); // ruta para obtener todos los clientes con GET

router.get('/:id', _client.getOneClient); // ruta que extrae un cliente especifico

router.post('/', _client.createClient); // // ruta que elimina un cliente

router["delete"]('/:id', _client.deleteOneClient); // // ruta que actualiza un cliente

router.put('/:id', _client.updateClient);
var _default = router;
exports["default"] = _default;