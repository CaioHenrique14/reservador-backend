import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarService } from 'src/car/car.service';
import { Lease } from './lease.model';

@Injectable()
export class LeaseService {
    constructor(private carService: CarService,
        @InjectModel(Lease.name) private leaseModel: Model<Lease>
    ) { }

    async getAll(): Promise<Lease[]> {
        return this.leaseModel.find().exec();
    }

    async create(lease: Lease): Promise<Lease> {

        const car = await this.carService.findById(lease.idCar);
        if(car.available){
        const leaseCreate = new this.leaseModel(lease);
        return leaseCreate.save();
        }else{
            throw new UnauthorizedException('Carro não está disponível para locação');
        }
 

        
    }

    async getLeaseByUser(id: any): Promise<Lease[]> {
        let idUser = id.id;
        return this.leaseModel.find({ idUser }).exec();
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
