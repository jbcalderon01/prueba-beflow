import type { ObjectId } from "mongoose";

export interface Product {
  _id?: ObjectId;
  name?: string;
  category?: string;
}
