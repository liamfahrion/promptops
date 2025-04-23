import {
    pgTable,
    uuid,
    varchar,
    integer,
    timestamp,
  } from "drizzle-orm/pg-core";
  
  export const uploadedFiles = pgTable("uploaded_files", {
    id: uuid("id").defaultRandom().primaryKey(),
    fileKey: varchar("file_key", { length: 256 }).notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    size: integer("size").notNull(),
    type: varchar("type", { length: 128 }).notNull(),
    userId: varchar("user_id", { length: 256 }).notNull(),
    orgId: varchar("org_id", { length: 256 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  });
  