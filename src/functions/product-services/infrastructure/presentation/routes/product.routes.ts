import { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import { productControllers } from "../../di";
import {
  createProductSchemaInput,
  deleteProductSchemaInput,
  getAllProductsSchemaInput,
  updateProductSchemaInput,
} from "../schemas";

export const productRoutes = (
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  _opts: { prefix: string },
  next: (err?: Error) => void
) => {
  fastify.get(
    "/",
    getAllProductsSchemaInput,
    productControllers.getAllProducts
  );
  fastify.post("/", createProductSchemaInput, productControllers.createProduct);
  fastify.put(
    "/:productId",
    updateProductSchemaInput,
    productControllers.updateProduct
  );
  fastify.delete(
    "/:productId",
    deleteProductSchemaInput,
    productControllers.deleteProduct
  );
  next();
};
