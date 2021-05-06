import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Unit } from './unit.model';

@Injectable()
export class UnitService {
    constructor(
        @InjectModel(Unit.name) private unitModel: Model<Unit>
    ) { }

    async getAll(): Promise<Unit[]> {
        return this.unitModel.find().exec();
    }

    async create(unit: Unit): Promise<Unit> {
        const unitCreate = new this.unitModel(unit);

        return unitCreate.save();
    }

    async findById(id: string): Promise<Unit> {
        return this.unitModel.findById(id).exec();
    }

    async update(id: string, unit: Unit): Promise<Unit> {
        return this.unitModel.findByIdAndUpdate(id, unit).exec();
    }

    async delete(id: string) {
        const unitDelete = this.unitModel.findOneAndDelete({ _id: id }).exec();

        return (await unitDelete).remove();
    }
}
