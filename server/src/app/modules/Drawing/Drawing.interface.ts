import { Document } from 'mongoose';

export interface IDrawing extends Document {
  shapes: string;
  isDeleted: boolean;
}
