import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Lease, LeaseSchema } from  './lease.model';
import { LeaseService } from './lease.service';
import { LeaseController } from './lease.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Lease.name,
        schema: LeaseSchema
      }
    ])
  ],
  exports: [],
  controllers: [LeaseController],
  providers: [LeaseService]
})
export class LeaseModule {}