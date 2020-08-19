"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _employee = require("./../controllers/employee.controller");

var router = (0, _express.Router)();
router.get('/', _employee.getEmployees);
router.get('/:id', _employee.getOneEmployee);
router.post('/', _employee.createEmployee);
router["delete"]('/:id', _employee.deleteEmployee);
router.put('/:id', _employee.updateEmployee);
var _default = router;
exports["default"] = _default;