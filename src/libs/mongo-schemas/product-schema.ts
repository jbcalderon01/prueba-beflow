import { Schema } from "mongoose";

export const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

productSchema.index({ name: 1 }, { unique: true });
