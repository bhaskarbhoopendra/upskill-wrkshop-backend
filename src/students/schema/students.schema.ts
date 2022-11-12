import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;
@Schema()
export class Student {
  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: number;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
