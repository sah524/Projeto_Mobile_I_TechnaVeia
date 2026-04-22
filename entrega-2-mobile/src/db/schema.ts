import { sqliteTable, text } from "drizzle-orm/sqlite-core";

// UF
export const uf = sqliteTable("uf", {
  id: text("id").primaryKey(),
  nome: text("nome").notNull(),
  sigla: text("sigla").notNull(),
});

// Cidade
export const cidade = sqliteTable("cidade", {
  id: text("id").primaryKey(),
  nome: text("nome").notNull(),
  uf_id: text("uf_id").notNull(),
});

// Região
export const regiao = sqliteTable("regiao", {
  id: text("id").primaryKey(),
  nome: text("nome").notNull(),
  cidade_id: text("cidade_id").notNull(),
});