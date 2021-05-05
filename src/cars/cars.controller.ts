import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Car } from './car';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService
  ) {}

  @Get()
  async getAll(): Promise<Car[]> {
    return this.carsService.getAll();
  }

  @Post()
  async create(@Body() car: Car): Promise<Car> {
    return this.carsService.create(car);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Car> {
    return this.carsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() carUpdated: Car): Promise<Car> {
    return this.carsService.update(id, carUpdated);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Car> {
    return this.carsService.delete(id);
  }

}
