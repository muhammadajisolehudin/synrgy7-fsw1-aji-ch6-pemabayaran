"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carsController_1 = require("../../controllers/carsController");
const router = (0, express_1.Router)();
router.get('/cars', carsController_1.getCars);
router.get('/cars/:id', carsController_1.getCarsById);
router.post('/cars', carsController_1.createCar);
router.delete('/cars/:id', carsController_1.deleteCarsById);
router.patch('/cars/:id', carsController_1.updateCarsById);
exports.default = router;
