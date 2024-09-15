import mongoose, { Schema, Document } from 'mongoose';
import { IDrawing } from './Drawing.interface';

const DrawingSchema: Schema = new Schema<IDrawing>(
  {
    shapes: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const Drawing = mongoose.model<IDrawing>('Drawing', DrawingSchema);
