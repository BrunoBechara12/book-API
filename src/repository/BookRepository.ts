import { db } from "../db";
import { book, bookSchema } from "../db/schema";

export default interface BookRepository {
  GetAllBooks(): Promise<bookSchema[]>;
  CreateBook(Objectbook: bookSchema): Promise<void>;
}

export class BookRepositoryDatabase implements BookRepository {
  async GetAllBooks(): Promise<bookSchema[]> {
    const bookList: bookSchema[] = await db.select().from(book);

    return bookList;
  }

  async CreateBook(Objectbook: bookSchema): Promise<void> {
    const [bookCreate] = await db.insert(book).values(Objectbook);
  }
}
