import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lease } from './lease.model';

@Injectable()
export class LeaseService {
    constructor(
        @InjectModel(Lease.name) private leaseModel: Model<Lease>
    ) { }

    async getAll(): Promise<Lease[]> {
        return this.leaseModel.find().exec();
    }

    async create(lease: Lease): Promise<Lease> {
        const leaseCreate = new this.leaseModel(lease);

        return leaseCreate.save();
    }

    async findById(id: string): Promise<Lease> {
        return this.leaseModel.findById(id).exec();
    }

    async update(id: string, lease: Lease): Promise<Lease> {
        return this.leaseModel.findByIdAndUpdate(id, lease).exec();
    }

    async delete(id: string) {
        const leaseDelete = this.leaseModel.findOneAndDelete({ _id: id }).exec();

        return (await leaseDelete).remove();
    }
}
