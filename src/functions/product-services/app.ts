import fastify from "fastify";
import registerAppRoutes from "./infrastructure/presentation/routes";
import { errorFormatter } from "@libs/utils";

const app = fastify();

app.setErrorHandler(errorFormatter);

app.register(registerAppRoutes, { prefix: "/products" });

export default app;
