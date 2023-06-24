import { Product } from "@libs/entities";
import {
  CreateProductDTO,
  GetAllProductDTO,
  IProductRepository,
  IProductServices,
  PRODUCT_ERROR,
  UpdateProductDTO,
} from "../domain";

export class ProductServices implements IProductServices {
  constructor(private readonly productRepository: IProductRepository) {}

  getAllProducts(dto?: GetAllProductDTO): Promise<Product[]> {
    return this.productRepository.getAllProducts(dto);
  }

  async createProduct(dto: CreateProductDTO): Promise<Product> {
    const isProductExist = await this.productRepository.getProductByName(
      dto.name
    );

    if (isProductExist) {
      throw new Error(PRODUCT_ERROR.PRODUCT_NAME_ALREADY_EXIST);
    }

    return this.productRepository.createProduct(dto);
  }

  async updateProduct(dto: UpdateProductDTO): Promise<Product> {
    const productUpdated = this.productRepository.updateProduct(dto);
    console.log(productUpdated);
    if (!productUpdated) {
      throw new Error(PRODUCT_ERROR.PRODUCT_NOT_EXIST);
    }
    return productUpdated;
  }

  deleteProduct(productId: string): Promise<Product> {
    return this.productRepository.deleteProduct(productId);
  }
}
