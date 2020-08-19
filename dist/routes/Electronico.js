"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _electronic = require("./../controllers/electronic.controller");

var router = (0, _express.Router)();
router.get('/', _electronic.getElectronics);
router.get('/:id', _electronic.getOneElectronic);
router.post('/', _electronic.createElectronic);
router["delete"]('/:id', _electronic.deleteElectronic);
router.put('/:id', _electronic.updateElectronic);
var _default = router;
exports["default"] = _default;