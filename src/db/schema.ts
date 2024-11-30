import {
  date,
  decimal,
  integer,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const book = pgTable("book", {
  id: integer().primaryKey().generatedAlwaysAsIdentity().unique(),
  name: varchar({ length: 255 }).notNull(),
  idAuthor: integer().notNull(),
  genre: varchar({ length: 100 }),
  rating: decimal({ precision: 2, scale: 1 }).notNull(),
  pageCount: integer().notNull(),
  publicationDate: date().notNull(),
  createdAt: timestamp({ precision: 6, withTimezone: true }).notNull(),
  updatedAt: timestamp({ precision: 6, withTimezone: true }),
});

export type book = typeof book.$inferSelect;

export const author = pgTable("author", {
  id: integer().primaryKey().generatedAlwaysAsIdentity().unique(),
  name: varchar({ length: 255 }).notNull(),
});

export type author = typeof author.$inferSelect;
