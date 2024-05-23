import { CarsModel, Car } from '../models/car';

class CarsService {
  static async getAllCars() {
    try {
      const cars = await CarsModel.query();
      return cars;
    } catch (error) {
      throw new Error(`Error fetching cars: ${error.message}`);
    }
  }

  static async getCarById(id: number) {
    try {
      const car = await CarsModel.query().findById(id);
      if (!car) {
        throw new Error('Car not found');
      }
      return car;
    } catch (error) {
      throw new Error(`Error fetching car by ID: ${error.message}`);
    }
  }

  static async createCar(carData: Car) {
    try {
      const car = await CarsModel.query().insert(carData).returning('*');
      return car;
    } catch (error) {
      throw new Error(`Error creating car: ${error.message}`);
    }
  }

  static async deleteCarById(id: number) {
    try {
      const car = await CarsModel.query().findById(id);
      if (!car) {
        throw new Error('Car not found');
      }
      await CarsModel.query().deleteById(id);
      return { message: 'Car deleted successfully' };
    } catch (error) {
      throw new Error(`Error deleting car: ${error.message}`);
    }
  }

  static async updateCarById(id: number, carData: Partial<Car>) {
    try {
      const car = await CarsModel.query().findById(id);
      if (!car) {
        throw new Error('Car not found');
      }
      const updatedCar = await CarsModel.query().findById(id).patch(carData).returning('*');
      return updatedCar;
    } catch (error) {
      throw new Error(`Error updating car: ${error.message}`);
    }
  }
}

export default CarsService;
