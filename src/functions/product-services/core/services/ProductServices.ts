import { Product } from "@libs/entities";
import {
  CreateProductDTO,
  GetAllProductDTO,
  IProductRepository,
  IProductServices,
  PRODUCT_ERROR,
  UpdateProductDTO,
} from "../domain";
import { ApiError, ErrorStatusCodes } from "@libs/utils";

export class ProductServices implements IProductServices {
  constructor(private readonly productRepository: IProductRepository) {}

  getAllProducts(dto?: GetAllProductDTO): Promise<Product[]> {
    return this.productRepository.getAllProducts(dto);
  }

  async getProductById(productId: string): Promise<Product> {
    const product = await this.productRepository.getProductById(productId);

    if (!product) {
      throw new ApiError(
        PRODUCT_ERROR.PRODUCT_NOT_EXIST,
        ErrorStatusCodes.NotFound
      );
    }

    return product;
  }

  async createProduct(dto: CreateProductDTO): Promise<Product> {
    const isProductExist = await this.productRepository.getProductByName(
      dto.name
    );

    if (isProductExist) {
      throw new ApiError(
        PRODUCT_ERROR.PRODUCT_NAME_ALREADY_EXIST,
        ErrorStatusCodes.BadRequest
      );
    }

    return this.productRepository.createProduct(dto);
  }

  async updateProduct(dto: UpdateProductDTO): Promise<Product> {
    try {
      const productUpdated = await this.productRepository.updateProduct(dto);
      return productUpdated;
    } catch (error) {
      throw new ApiError(
        PRODUCT_ERROR.PRODUCT_CANNOT_BE_UPDATED,
        ErrorStatusCodes.BadRequest
      );
    }
  }

  async deleteProduct(productId: string): Promise<Product> {
    try {
      const productDeleted = await this.productRepository.deleteProduct(
        productId
      );
      return productDeleted;
    } catch (error) {
      throw new ApiError(
        PRODUCT_ERROR.PRODUCT_CANNOT_BE_DELETED,
        ErrorStatusCodes.BadRequest
      );
    }
  }
}
