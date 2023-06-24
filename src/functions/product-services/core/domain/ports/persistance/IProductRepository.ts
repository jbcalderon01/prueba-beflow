import { Product } from "@libs/entities";
import { CreateProductDTO, GetAllProductDTO, UpdateProductDTO } from "../dto";

export interface IProductRepository {
  getAllProducts(dto?: GetAllProductDTO): Promise<Product[]>;
  createProduct(dto: CreateProductDTO): Promise<Product>;
  getProductByName(productName: string): Promise<Product | null>;
  updateProduct(dto: UpdateProductDTO): Promise<Product | null>;
  deleteProduct(productId: string): Promise<Product | null>;
}
