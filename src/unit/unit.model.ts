import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Unit extends Document {

  @Prop()
  name: string;

  @Prop()
  city: string;

  @Prop()
  state: string;
}

export const UnitSchema = SchemaFactory.createForClass(Unit);