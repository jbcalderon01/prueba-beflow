import { Product } from "@libs/entities";
import { CreateProductDTO, GetAllProductDTO, UpdateProductDTO } from "../dto";

export interface IProductServices {
  getAllProducts(dto?: GetAllProductDTO): Promise<Product[]>;
  createProduct(dto: CreateProductDTO): Promise<Product>;
  updateProduct(dto: UpdateProductDTO): Promise<Product>;
  deleteProduct(productId: string): Promise<Product>;
}
