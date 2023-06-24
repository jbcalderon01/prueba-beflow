import fastify from "fastify";
import registerAppRoutes from "./infrastructure/presentation/routes";

const app = fastify();

app.register(registerAppRoutes, { prefix: "/product" });

export default app;
