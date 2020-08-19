"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmployees = getEmployees;
exports.getOneEmployee = getOneEmployee;
exports.createEmployee = createEmployee;
exports.deleteEmployee = deleteEmployee;
exports.updateEmployee = updateEmployee;

var _Empleado = _interopRequireDefault(require("./../models/Empleado"));

var _mongodb = require("mongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('./../database/database'); // conection


// funciones útiles para administrar los empleados
function getEmployees(_x, _x2) {
  return _getEmployees.apply(this, arguments);
}

function _getEmployees() {
  _getEmployees = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var employees;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Empleado["default"].find();

          case 3:
            employees = _context.sent;
            // respuesta al cliente
            res.json(employees);
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
  return _getEmployees.apply(this, arguments);
}

function getOneEmployee(_x3, _x4) {
  return _getOneEmployee.apply(this, arguments);
}

function _getOneEmployee() {
  _getOneEmployee = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, employee;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id; // ID de la URL

            _context2.next = 4;
            return _Empleado["default"].findOne({
              "_id": (0, _mongodb.ObjectId)(id)
            });

          case 4:
            employee = _context2.sent;
            // respuesta al cliente
            res.json(employee);
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
  return _getOneEmployee.apply(this, arguments);
}

function createEmployee(_x5, _x6) {
  return _createEmployee.apply(this, arguments);
}

function _createEmployee() {
  _createEmployee = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, ap_paterno, salario, employeeCreated;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, nombre = _req$body.nombre, ap_paterno = _req$body.ap_paterno, salario = _req$body.salario; // datos que envia el cliente

            _context3.next = 4;
            return _Empleado["default"].insertMany({
              "nombre": nombre,
              "ap_paterno": ap_paterno,
              "salario": salario
            });

          case 4:
            employeeCreated = _context3.sent;
            // respuesta al cliente
            res.json({
              "message": "Employee created successfully",
              "data": employeeCreated
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Something goes wrong",
              data: {}
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _createEmployee.apply(this, arguments);
}

function deleteEmployee(_x7, _x8) {
  return _deleteEmployee.apply(this, arguments);
}

function _deleteEmployee() {
  _deleteEmployee = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, employeeDeleted;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id; // ID de la URL

            _context4.next = 4;
            return _Empleado["default"].deleteOne({
              "_id": (0, _mongodb.ObjectId)(id)
            });

          case 4:
            employeeDeleted = _context4.sent;
            // respuesta al cliente
            res.json({
              "message": "Employee deleted",
              "data": employeeDeleted
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
  return _deleteEmployee.apply(this, arguments);
}

function updateEmployee(_x9, _x10) {
  return _updateEmployee.apply(this, arguments);
}

function _updateEmployee() {
  _updateEmployee = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, nombre, ap_paterno, salario, employeeUpdated;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id; // ID de la URL

            console.log(id);
            _req$body2 = req.body, nombre = _req$body2.nombre, ap_paterno = _req$body2.ap_paterno, salario = _req$body2.salario; // datos a actualizar    

            _context5.next = 6;
            return _Empleado["default"].updateOne({
              "_id": (0, _mongodb.ObjectId)(id)
            }, {
              $set: {
                "nombre": nombre,
                "ap_paterno": ap_paterno,
                "salario": salario
              }
            });

          case 6:
            employeeUpdated = _context5.sent;
            // respuesta al cliente
            res.json({
              "message": "Employee updated",
              "data": employeeUpdated
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
  return _updateEmployee.apply(this, arguments);
}