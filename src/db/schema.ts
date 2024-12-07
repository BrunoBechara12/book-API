import {
  date,
  decimal,
  integer,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const book = pgTable("book", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  idAuthor: integer().notNull(),
  genre: varchar({ length: 100 }),
  rating: decimal({ precision: 2, scale: 1 }).notNull(),
  pageCount: integer().notNull(),
  publicationDate: date().notNull(),
  createdAt: timestamp({ precision: 6, withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp({ precision: 6, withTimezone: true }),
});

export type bookSchema = typeof book.$inferSelect;

export const author = pgTable("author", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
});

export type authorSchema = typeof author.$inferSelect;
