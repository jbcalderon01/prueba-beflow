import { ProductServices } from "../../src/functions/product-services/core";

export const ALL_PRODUCTS_MOCK = [
  {
    _id: "6496b884c66d1ba752654cbf",
    name: "Harina",
    category: "Panaderia",
  },
  {
    _id: "6496b88cc66d1ba752654cc3",
    name: "Pan",
    category: "Panaderia",
  },
  {
    _id: "6496b894c66d1ba752654cc6",
    name: "Pan de bono",
    category: "Panaderia",
  },
];

export const GET_PRODUCT_BY_NAME_RESULT = {
  _id: "6496b894c66d1ba752654cc6",
  name: "Pan de bono",
  category: "Panaderia",
};

export const CREATED_PRODUCT_MOCK_RESULT = {
  _id: "6496b894c66d1ba752654cc6",
  name: "Pan de bono",
  category: "Panaderia",
};

export const CREATE_PRODUCT_MOCK_DTO = {
  name: "Pan de bono",
  category: "Panaderia",
};

export const UPDATED_PRODUCT_MOCK_RESULT = {
  _id: "6496b88cc66d1ba752654cc3",
  name: "Pan",
  category: "Panaderia",
};

export const UPDATE_PRODUCT_MOCK_DTO = {
  _id: "6496b88cc66d1ba752654cc3",
  name: "Pan",
  category: "Panaderia",
};

export const DELETED_PRODUCT_MOCK_RESULT = {
  _id: "6496b884c66d1ba752654cbf",
  name: "Harina",
  category: "Panaderia",
};

export const GET_PRODUCT_MOCK_RESULT = {
  _id: "6496b884c66d1ba752654cbf",
  name: "Harina",
  category: "Panaderia",
};

export const productRepositoryMock = {
  getAllProducts: jest.fn().mockReturnValue(ALL_PRODUCTS_MOCK),
  createProduct: jest.fn().mockReturnValue(CREATED_PRODUCT_MOCK_RESULT),
  getProductByName: jest.fn().mockReturnValue(null),
  updateProduct: jest.fn().mockReturnValue(UPDATED_PRODUCT_MOCK_RESULT),
  deleteProduct: jest.fn().mockReturnValue(DELETED_PRODUCT_MOCK_RESULT),
  getProductById: jest.fn().mockReturnValue(GET_PRODUCT_MOCK_RESULT),
};

export const productServicesMock = new ProductServices(productRepositoryMock);
