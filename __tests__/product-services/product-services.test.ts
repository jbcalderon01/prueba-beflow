import {
  PRODUCT_ERROR,
  ProductServices,
} from "../../src/functions/product-services/core";
import {
  ALL_PRODUCTS_MOCK,
  CREATE_PRODUCT_MOCK_DTO,
  CREATED_PRODUCT_MOCK_RESULT,
  UPDATE_PRODUCT_MOCK_DTO,
  UPDATED_PRODUCT_MOCK_RESULT,
  productServicesMock,
  DELETED_PRODUCT_MOCK_RESULT,
  productRepositoryMock,
  GET_PRODUCT_BY_NAME_RESULT,
  GET_PRODUCT_MOCK_RESULT,
} from "./mocks";

describe("Product services", () => {
  it("test_get_all_products_no_params", async () => {
    const result = await productServicesMock.getAllProducts();
    expect(result).toEqual(ALL_PRODUCTS_MOCK);
  });

  it("test_create_product_valid_dto", async () => {
    const result = await productServicesMock.createProduct(
      CREATE_PRODUCT_MOCK_DTO
    );
    expect(result).toEqual(CREATED_PRODUCT_MOCK_RESULT);
  });

  it("test_create_product_name_already_exists", async () => {
    const mockProductRepository = {
      ...productRepositoryMock,
      getProductByName: jest.fn().mockResolvedValue(GET_PRODUCT_BY_NAME_RESULT),
    };
    const productServices = new ProductServices(mockProductRepository);
    await expect(
      productServices.createProduct(CREATE_PRODUCT_MOCK_DTO)
    ).rejects.toThrow(PRODUCT_ERROR.PRODUCT_NAME_ALREADY_EXIST);
  });

  it("test_update_product_valid_dto", async () => {
    const result = await productServicesMock.updateProduct(
      UPDATE_PRODUCT_MOCK_DTO
    );
    expect(result).toEqual(UPDATED_PRODUCT_MOCK_RESULT);
  });

  it("test_update_product_id_not_exist", async () => {
    const mockProductRepository = {
      ...productRepositoryMock,
      updateProduct: jest.fn().mockRejectedValue(null),
    };
    const productServices = new ProductServices(mockProductRepository);
    await expect(
      productServices.updateProduct({
        _id: "123",
        name: "product1",
        category: "category1",
      })
    ).rejects.toThrow(PRODUCT_ERROR.PRODUCT_CANNOT_BE_UPDATED);
  });

  it("test_delete_product_valid_id", async () => {
    const result = await productServicesMock.deleteProduct(
      "6496b884c66d1ba752654cbf"
    );
    expect(result).toEqual(DELETED_PRODUCT_MOCK_RESULT);
  });

  it("test_update_product_id_not_exist", async () => {
    const mockProductRepository = {
      ...productRepositoryMock,
      deleteProduct: jest.fn().mockRejectedValue(null),
    };
    const productServices = new ProductServices(mockProductRepository);
    await expect(
      productServices.deleteProduct("6496b894c66d1ba752654cc6")
    ).rejects.toThrow(PRODUCT_ERROR.PRODUCT_CANNOT_BE_DELETED);
  });

  it("test_get_product_by_id_returns_product", async () => {
    const productId = "6496b884c66d1ba752654cbf";

    const result = await productServicesMock.getProductById(productId);

    expect(result).toEqual(GET_PRODUCT_MOCK_RESULT);
  });

  it("test_get_product_by_id_product_not_exist", async () => {
    const productId = "id not exits";

    const mockProductRepository = {
      ...productRepositoryMock,
      getProductById: jest.fn().mockReturnValue(null),
    };

    const productServices = new ProductServices(mockProductRepository);
    await expect(productServices.getProductById(productId)).rejects.toThrow(
      PRODUCT_ERROR.PRODUCT_NOT_EXIST
    );
  });
});
