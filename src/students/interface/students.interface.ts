import { Document } from 'mongoose';
export interface IStudent extends Document{
    readonly fullName: string;
    readonly email: string;
    readonly phoneNumber: number;
}