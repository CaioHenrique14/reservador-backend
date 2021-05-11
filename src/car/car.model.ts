import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car extends Document {

    @Prop()
    idUnit: string;

    @Prop()
    name: string;

    @Prop()
    plate: string;
  
    @Prop()
    year: number;
  
    @Prop()
    body: string;
    
    @Prop()
    image:string;

    @Prop()
    transmission: string;

    @Prop()
    fuel: string;

    @Prop()
    color: string;

    @Prop()
    price: number;

    @Prop()
    available: string;
    
}

export const CarSchema = SchemaFactory.createForClass(Car);