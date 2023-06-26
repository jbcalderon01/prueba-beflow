import { FastifyRequest } from "fastify";
import {
  CreateProductDTO,
  GetAllProductDTO,
  IProductServices,
  UpdateProductDTO,
} from "../../../core";

export function ProductServicesControllers(productServices: IProductServices) {
  function getAllProducts(
    req: FastifyRequest<{
      Querystring: GetAllProductDTO;
    }>
  ) {
    const getAllProductFilters = {
      category: req.query.category,
      name: req.query.name,
    };
    return productServices.getAllProducts(getAllProductFilters);
  }

  function getProductById(
    req: FastifyRequest<{
      Params: {
        productId: string;
      };
    }>
  ) {
    return productServices.getProductById(req.params.productId);
  }

  function createProduct(req: FastifyRequest<{ Body: CreateProductDTO }>) {
    const createProductDto: CreateProductDTO = {
      name: req.body.name,
      category: req.body.category,
    };

    return productServices.createProduct(createProductDto);
  }

  function updateProduct(
    req: FastifyRequest<{
      Params: { productId: string };
      Body: Omit<UpdateProductDTO, "_id">;
    }>
  ) {
    const updateProductDto: UpdateProductDTO = {
      _id: req.params.productId,
      name: req.body.name,
      category: req.body.category,
    };

    return productServices.updateProduct(updateProductDto);
  }

  function deleteProduct(
    req: FastifyRequest<{
      Params: { productId: string };
    }>
  ) {
    const productId = req.params.productId;
    return productServices.deleteProduct(productId);
  }

  return {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
  };
}
