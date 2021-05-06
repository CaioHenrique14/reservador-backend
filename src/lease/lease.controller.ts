
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Lease } from './lease.model';
import { LeaseService } from './lease.service';

@Controller('lease')
export class LeaseController {
  constructor(
    private readonly leaseService: LeaseService
  ) {}

  @Get()
  async getAll(): Promise<Lease[]> {
    return this.leaseService.getAll();
  }

  @Post()
  async create(@Body() lease: Lease): Promise<Lease> {
    return this.leaseService.create(lease);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Lease> {
    return this.leaseService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() leaseUpdated: Lease): Promise<Lease> {
    return this.leaseService.update(id, leaseUpdated);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Lease> {
    return this.leaseService.delete(id);
  }

}
