import { SchemaCompiler } from "./schema";

export const getAllProductsSchemaInput: SchemaCompiler = {
  schema: {
    querystring: {
      type: "object",
      properties: {
        name: { type: "string" },
        category: { type: "string" },
      },
    },
  },
};

export const createProductSchemaInput: SchemaCompiler = {
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        category: { type: "string" },
      },
      required: ["name", "category"],
    },
  },
};

export const updateProductSchemaInput: SchemaCompiler = {
  schema: {
    params: {
      type: "object",
      properties: {
        productId: { type: "string" },
      },
      required: ["productId"],
    },
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        category: { type: "string" },
      },
    },
  },
};

export const deleteProductSchemaInput: SchemaCompiler = {
  schema: {
    params: {
      type: "object",
      properties: {
        productId: { type: "string" },
      },
      required: ["productId"],
    },
  },
};
