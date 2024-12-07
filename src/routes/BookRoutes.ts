import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { BookController } from "../controller/BookController";
import { bookSchema } from "../db/schema";
import { createBookRepository } from "../db/factories/BookDatabaseFactory";
import GetAllBooks from "../use-case/GetAllBooks";
import CreateBook from "../use-case/CreateBook";

export const BookRoutes = async (app: FastifyInstance) => {
  app.get(
    "/getAllBooks",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const repository = createBookRepository();

      const getAllBooks = new GetAllBooks(repository);

      const books = await getAllBooks.execute();

      reply.send(books);
    }
  );

  app.post(
    "/createBook",
    (request: FastifyRequest<{ Body: bookSchema }>, reply: FastifyReply) => {
      const repository = createBookRepository();

      const createBook = new CreateBook(repository);

      const data = request.body;

      const retorno = createBook.execute(data);

      reply.status(201).send(retorno);
    }
  );
};
