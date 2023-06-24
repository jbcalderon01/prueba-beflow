export type CreateProductDTO = {
  name: string;
  category: string;
};

export type UpdateProductDTO = {
  _id: string;
  name?: string;
  category?: string;
};

export type GetAllProductDTO = {
  name?: string;
  category?: string;
};
