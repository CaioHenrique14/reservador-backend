import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilterSelector } from 'src/filter/filter-selector.model';
import { Car } from './car.model';

@Injectable()
export class CarService {
    constructor(
        @InjectModel(Car.name) private carModel: Model<Car>
    ) { }

    async getAll(): Promise<Car[]> {
        return this.carModel.find().exec();
    }

    async findByFilter(filter:FilterSelector): Promise<Car[]> {
        let body = filter.body;
        let idUnit = filter.origin;
        return this.carModel.find({body},{idUnit});
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
