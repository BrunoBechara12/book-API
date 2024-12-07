import { FastifyReply, FastifyRequest } from "fastify";
import { BookEntity } from "../domain/Book";
import { BookService } from "../service/BookService";
import { authorSchema, bookSchema } from "../db/schema";

export class BookController {
  async GetAllBooks(reply: FastifyReply) {
    try {
      const bookService = new BookService();

      const books = await bookService.GetAllBooks(reply);

      return reply.status(201).send(books);
    } catch (e) {
      return reply.status(400).send(e);
    }
  }

  async CreateBook(
    request: FastifyRequest<{ Body: bookSchema }>,
    reply: FastifyReply
  ) {
    try {
      const bookService = new BookService();

      const books = await bookService.createBook(request, reply);

      return reply.status(201).send(books);
    } catch (e) {
      return reply.status(400).send(e);
    }
  }

  async CreateAuthor(
    request: FastifyRequest<{ Body: authorSchema }>,
    reply: FastifyReply
  ) {
    try {
      const bookService = new BookService();

      const books = await bookService.createAuthor(request, reply);

      return reply.status(201).send(books);
    } catch (e) {
      return reply.status(400).send(e);
    }
  }
}
