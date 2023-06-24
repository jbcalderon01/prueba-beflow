import {
  CreateProductDTO,
  GetAllProductDTO,
  IProductRepository,
  UpdateProductDTO,
} from "../../../core";
import { ProductModel } from "../database";
import { Product } from "@libs/entities";

export class ProductRepository implements IProductRepository {
  constructor(private productModel: typeof ProductModel) {}

  private buildGetAllProductFilters(dto?: GetAllProductDTO) {
    return {
      ...(dto?.category
        ? { category: { $regex: dto.category, $options: "i" } }
        : {}),
      ...(dto?.name ? { name: { $regex: dto.name, $options: "i" } } : {}),
    };
  }

  getAllProducts(dto?: GetAllProductDTO): Promise<Product[]> {
    return this.productModel.find(this.buildGetAllProductFilters(dto));
  }

  async createProduct(dto: CreateProductDTO): Promise<Product> {
    const productCreated = await this.productModel.create({
      category: dto.category,
      name: dto.name,
    });
    return productCreated.toObject();
  }

  async getProductByName(productName: string): Promise<Product | null> {
    return this.productModel.findOne({ name: productName });
  }

  updateProduct(dto: UpdateProductDTO): Promise<Product> {
    return this.productModel.findByIdAndUpdate(
      {
        _id: dto._id,
      },
      { category: dto.category, name: dto.name },
      { new: true }
    );
  }

  deleteProduct(productId: string): Promise<Product> {
    return this.productModel.findByIdAndDelete({ _id: productId });
  }
}
