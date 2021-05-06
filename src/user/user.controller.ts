import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get()
  async getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    user.password = await bcrypt.hash(user.password, 12);
    return this.userService.create(user);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() userUpdated: User): Promise<User> {
    return this.userService.update(id, userUpdated);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }

}