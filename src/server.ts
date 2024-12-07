import fastify from "fastify";
import { routes } from "../routes";
import "dotenv/config";

export const app = fastify();

app.register(routes);

app.listen({ port: 3000 }, (err, adress) => {
  if (err) {
    console.log(err);
  }

  console.log("Aplicação rodando");
});
