import { productSchema } from "@libs/mongo-schemas";
import mongoose from "mongoose";

export const ProductModel = mongoose.model("products", productSchema);
