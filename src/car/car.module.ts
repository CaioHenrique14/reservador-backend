import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from  './car.model';
import { CarService } from './car.service';
import { CarController } from './car.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema
      }
    ])
  ],
  exports: [CarService],
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {}