
import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(), // text for display purposes e.g. "$100" or "Contact for quote"
  features: text("features").array(),
  images: text("images").array().notNull(), // Array of image URLs
  category: text("category").notNull(),
});

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  query: text("query").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertContactSchema = createInsertSchema(contactRequests).omit({ id: true });

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactSchema>;
