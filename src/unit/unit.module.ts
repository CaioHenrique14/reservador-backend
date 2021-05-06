import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Unit, UnitSchema } from './unit.model';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Unit.name,
        schema: UnitSchema
      }
    ])
  ],
  exports: [],
  controllers: [UnitController],
  providers: [UnitService]
})
export class UnitModule { }
