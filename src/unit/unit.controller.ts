import { Unit } from './unit.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UnitService } from './unit.service';

@Controller('unit')
export class UnitController {
  constructor(
    private readonly unitService: UnitService
  ) {}

  @Get()
  async getAll(): Promise<Unit[]> {
    return this.unitService.getAll();
  }

  @Post()
  async create(@Body() unit: Unit): Promise<Unit> {
    return this.unitService.create(unit);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Unit> {
    return this.unitService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() unitUpdated: Unit): Promise<Unit> {
    return this.unitService.update(id, unitUpdated);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Unit> {
    return this.unitService.delete(id);
  }

}

