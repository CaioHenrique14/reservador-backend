import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Car } from './car.model';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
  constructor(
    private readonly carService: CarService
  ) {}

  @Get()
  async getAll(): Promise<Car[]> {
    return this.carService.getAll();
  }

  @Post()
  async create(@Body() car: Car): Promise<Car> {
    return this.carService.create(car);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Car> {
    return this.carService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() carUpdated: Car): Promise<Car> {
    return this.carService.update(id, carUpdated);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Car> {
    return this.carService.delete(id);
  }

}
