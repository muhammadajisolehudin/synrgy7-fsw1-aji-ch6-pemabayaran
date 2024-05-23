"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("../models/car");
class CarsService {
    static getAllCars() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cars = yield car_1.CarsModel.query();
                return cars;
            }
            catch (error) {
                throw new Error(`Error fetching cars: ${error.message}`);
            }
        });
    }
    static getCarById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const car = yield car_1.CarsModel.query().findById(id);
                if (!car) {
                    throw new Error('Car not found');
                }
                return car;
            }
            catch (error) {
                throw new Error(`Error fetching car by ID: ${error.message}`);
            }
        });
    }
    static createCar(carData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const car = yield car_1.CarsModel.query().insert(carData).returning('*');
                return car;
            }
            catch (error) {
                throw new Error(`Error creating car: ${error.message}`);
            }
        });
    }
    static deleteCarById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const car = yield car_1.CarsModel.query().findById(id);
                if (!car) {
                    throw new Error('Car not found');
                }
                yield car_1.CarsModel.query().deleteById(id);
                return { message: 'Car deleted successfully' };
            }
            catch (error) {
                throw new Error(`Error deleting car: ${error.message}`);
            }
        });
    }
    static updateCarById(id, carData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const car = yield car_1.CarsModel.query().findById(id);
                if (!car) {
                    throw new Error('Car not found');
                }
                const updatedCar = yield car_1.CarsModel.query().findById(id).patch(carData).returning('*');
                return updatedCar;
            }
            catch (error) {
                throw new Error(`Error updating car: ${error.message}`);
            }
        });
    }
}
exports.default = CarsService;
