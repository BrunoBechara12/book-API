import { RoutesRegister } from "./src/routes/@RoutesRegister";
import { app } from "./src/server";
import "dotenv/config";

export const routes = async () => {
  app.register(RoutesRegister);
};
