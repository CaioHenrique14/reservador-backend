import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Lease extends Document {

  @Prop()
  idCar: string;

  @Prop()
  idUser: string;

  @Prop()
  dateInitial: Date;

  @Prop()
  dateFinal: Date;

  @Prop()
  mileage: number;

  @Prop()
  value: number;

  @Prop()
  notes: string;
}

export const LeaseSchema = SchemaFactory.createForClass(Lease);