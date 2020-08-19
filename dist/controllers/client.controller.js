"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClients = getClients;
exports.getOneClient = getOneClient;
exports.createClient = createClient;
exports.deleteOneClient = deleteOneClient;
exports.updateClient = updateClient;

var _Cliente = _interopRequireDefault(require("./../models/Cliente"));

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('./../database/database'); // conection


// funciones útiles para administrar los clientes
function getClients(_x, _x2) {
  return _getClients.apply(this, arguments);
}

function _getClients() {
  _getClients = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var clients;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Cliente["default"].find();

          case 3:
            clients = _context.sent;
            res.json({
              data: clients
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getClients.apply(this, arguments);
}

function getOneClient(_x3, _x4) {
  return _getOneClient.apply(this, arguments);
}

function _getOneClient() {
  _getOneClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, client;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id; // ID de la URL        

            _context2.next = 4;
            return _Cliente["default"].findOne({
              "_id": (0, _mongodb.ObjectID)(id)
            });

          case 4:
            client = _context2.sent;
            res.json({
              data: client
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneClient.apply(this, arguments);
}

function createClient(_x5, _x6) {
  return _createClient.apply(this, arguments);
}

function _createClient() {
  _createClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, ap_paterno, sexo, edad, domicilio, familiares, clientCreated;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, ap_paterno = _req$body.ap_paterno, sexo = _req$body.sexo, edad = _req$body.edad, domicilio = _req$body.domicilio, familiares = _req$body.familiares; // datos que envia el cliente

            console.log(req.body);
            console.log(familiares);
            _context3.next = 6;
            return _Cliente["default"].insertMany([{
              "nombre": nombre,
              "ap_paterno": ap_paterno,
              "sexo": sexo,
              "edad": edad,
              "domicilio": {
                "calle": domicilio.calle,
                "numero": domicilio.numero,
                "cp": domicilio.cp
              }
            }]);

          case 6:
            clientCreated = _context3.sent;
            // respuesta al cliente
            res.json({
              "message": "Client created",
              "data": clientCreated
            });
            _context3.next = 14;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return _createClient.apply(this, arguments);
}

function deleteOneClient(_x7, _x8) {
  return _deleteOneClient.apply(this, arguments);
}

function _deleteOneClient() {
  _deleteOneClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, clientDeleted;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id; // ID de la URL

            _context4.next = 4;
            return _Cliente["default"].deleteOne({
              "_id": (0, _mongodb.ObjectID)(id)
            });

          case 4:
            clientDeleted = _context4.sent;
            res.json({
              "message": "Client deleted",
              "data": clientDeleted
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deleteOneClient.apply(this, arguments);
}

function updateClient(_x9, _x10) {
  return _updateClient.apply(this, arguments);
}

function _updateClient() {
  _updateClient = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, ap_paterno, sexo, edad, domicilio, clientUpdated;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id; // ID de la URL

            _req$body2 = req.body, nombre = _req$body2.nombre, ap_paterno = _req$body2.ap_paterno, sexo = _req$body2.sexo, edad = _req$body2.edad, domicilio = _req$body2.domicilio; // datos a actualizar

            _context5.next = 5;
            return _Cliente["default"].updateOne({
              "_id": (0, _mongodb.ObjectID)(id)
            }, {
              $set: {
                "nombre": nombre,
                "ap_paterno": ap_paterno,
                "sexo": sexo,
                "edad": edad,
                "domicilio": {
                  "calle": domicilio.calle,
                  "numero": domicilio.numero,
                  "cp": domicilio.cp
                }
              }
            });

          case 5:
            clientUpdated = _context5.sent;
            // respuesta al cliente
            res.json({
              "message": "Client updated",
              "data": clientUpdated
            });
            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return _updateClient.apply(this, arguments);
}