import { Document } from 'mongoose';
export interface IStudent extends Document{
    readonly name: string;
    readonly email: string;
    readonly phone: number;
}