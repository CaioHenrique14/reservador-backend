import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car extends Document {

    @Prop()
    name: string;
  
    @Prop()
    year: number;
  
    @Prop()
    body: string;

    @Prop()
    transmission: string;

    @Prop()
    fuel: string;

    @Prop()
    color: string;

    @Prop()
    price: number;

    @Prop()
    isRent: boolean;
    
}

export const CarSchema = SchemaFactory.createForClass(Car);