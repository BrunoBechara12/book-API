import { BookRepositoryDatabase } from "../../repository/BookRepository";
import BookRepository from "../../repository/BookRepository";

export function createBookRepository(): BookRepository {
  // Aqui você pode condicionalmente retornar diferentes implementações,
  // como baseadas no ambiente ou configuração (e.g., um banco diferente)
  return new BookRepositoryDatabase(); // Você poderia trocar isso facilmente se mudar de banco
}
