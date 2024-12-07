import "dotenv/config";
import { app } from "../server";
import { BookRoutes } from "./BookRoutes";

export const RoutesRegister = async () => {
  app.register(BookRoutes);
};
