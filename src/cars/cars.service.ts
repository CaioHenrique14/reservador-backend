import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from './car';

@Injectable()
export class CarsService {
    constructor(
        @InjectModel(Car.name) private carModel: Model<Car>
    ) { }

    async getAll(): Promise<Car[]> {
        return this.carModel.find().exec();
    }

    async create(car: Car): Promise<Car> {
        const carCreate = new this.carModel(car);

        return carCreate.save();
    }

    async findById(id: string): Promise<Car> {
        return this.carModel.findById(id).exec();
    }

    async update(id: string, car: Car): Promise<Car> {
        return this.carModel.findByIdAndUpdate(id, car).exec();
    }

    async delete(id: string) {
        const carDelete = this.carModel.findOneAndDelete({ _id: id }).exec();

        return (await carDelete).remove();
    }
}
