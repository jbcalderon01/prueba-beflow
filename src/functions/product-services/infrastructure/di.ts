import { ProductServices } from "../core";
import { ProductModel, ProductRepository, dbConnect } from "./adapters";
import { ProductServicesControllers } from "./presentation/controllers";

dbConnect();

const productRepository = new ProductRepository(ProductModel);
const productServices = new ProductServices(productRepository);

export const productControllers = ProductServicesControllers(productServices);
