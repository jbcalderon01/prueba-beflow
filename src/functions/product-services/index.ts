import { handlerPath } from "@libs/handler-resolver";

export const productServices = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  name: "product-services",
  events: [
    {
      http: {
        method: "any",
        path: "/product/{proxy+}",
      },
    },
  ],
};
