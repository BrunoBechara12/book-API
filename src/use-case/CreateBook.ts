import { bookSchema } from "../db/schema";
import BookRepository from "../repository/BookRepository";

export default class CreateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(Objectbook: bookSchema) {
    await this.bookRepository.CreateBook(Objectbook);
  }
}
