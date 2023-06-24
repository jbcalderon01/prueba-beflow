import mongoose from "mongoose";
import { config } from "../../config";

export function dbConnect() {
  if (!config.environments.DATABASE_CONNECTION) {
    throw new Error("ENV DATABASE_CONNECTION is missing");
  }
  mongoose.connect(process.env.DATABASE_CONNECTION);
}
