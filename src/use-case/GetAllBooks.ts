import BookRepository from "../repository/BookRepository";

export default class GetAllBooks {
  constructor(readonly bookRepository: BookRepository) {}

  async execute() {
    return await this.bookRepository.GetAllBooks();
  }
}
