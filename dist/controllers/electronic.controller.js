"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElectronics = getElectronics;
exports.getOneElectronic = getOneElectronic;
exports.createElectronic = createElectronic;
exports.deleteElectronic = deleteElectronic;
exports.updateElectronic = updateElectronic;

var _Electronico = _interopRequireDefault(require("./../models/Electronico"));

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('./../database/database'); // conection


// funciones útiles para administrar los electronicos
function getElectronics(_x, _x2) {
  return _getElectronics.apply(this, arguments);
}

function _getElectronics() {
  _getElectronics = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var electronics;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Electronico["default"].find();

          case 3:
            electronics = _context.sent;
            // respuesta al cliente
            res.json(electronics);
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
  return _getElectronics.apply(this, arguments);
}

function getOneElectronic(_x3, _x4) {
  return _getOneElectronic.apply(this, arguments);
}

function _getOneElectronic() {
  _getOneElectronic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, electronic;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id; // ID de la URL

            _context2.next = 4;
            return _Electronico["default"].findById({
              "_id": (0, _mongodb.ObjectID)(id)
            });

          case 4:
            electronic = _context2.sent;
            // respuesta al cliente
            res.json(electronic);
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
  return _getOneElectronic.apply(this, arguments);
}

function createElectronic(_x5, _x6) {
  return _createElectronic.apply(this, arguments);
}

function _createElectronic() {
  _createElectronic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, marca, precio, electronicCreated;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, marca = _req$body.marca, precio = _req$body.precio; // datos que envia el cliente

            console.log(req.body);
            _context3.next = 5;
            return _Electronico["default"].insertMany({
              nombre: nombre,
              marca: marca,
              precio: precio
            });

          case 5:
            electronicCreated = _context3.sent;
            // respuesta al cliente
            res.json({
              "message": "Electronic created successfully",
              "data": electronicCreated
            });
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return _createElectronic.apply(this, arguments);
}

function deleteElectronic(_x7, _x8) {
  return _deleteElectronic.apply(this, arguments);
}

function _deleteElectronic() {
  _deleteElectronic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, electronicDeleted;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id; // ID de la URL

            _context4.next = 4;
            return _Electronico["default"].deleteOne({
              "_id": (0, _mongodb.ObjectID)(id)
            });

          case 4:
            electronicDeleted = _context4.sent;
            // respuesta al cliente
            res.json({
              "message": "Electronic deleted successfully",
              "data": electronicDeleted
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
  return _deleteElectronic.apply(this, arguments);
}

function updateElectronic(_x9, _x10) {
  return _updateElectronic.apply(this, arguments);
}

function _updateElectronic() {
  _updateElectronic = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, marca, precio, electronicUpdated;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id; // ID de la URL

            _req$body2 = req.body, nombre = _req$body2.nombre, marca = _req$body2.marca, precio = _req$body2.precio; // datos que envia el cliente

            console.log(req.body);
            _context5.next = 6;
            return _Electronico["default"].updateOne({
              "_id": (0, _mongodb.ObjectID)(id)
            }, {
              $set: {
                nombre: nombre,
                marca: marca,
                precio: precio
              }
            });

          case 6:
            electronicUpdated = _context5.sent;
            // respuest al cliente
            res.json({
              "message": "Electronic updated successfullly",
              "data": electronicUpdated
            });
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return _updateElectronic.apply(this, arguments);
}