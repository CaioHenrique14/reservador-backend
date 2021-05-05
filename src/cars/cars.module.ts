import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './car';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema
      }
    ])
  ],
  exports: [],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}