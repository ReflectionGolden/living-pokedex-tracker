import { boolean, integer, pgTable, serial, text } from 'drizzle-orm/pg-core'

export const planets = pgTable('pokedex', {
  id: serial("id").primaryKey(),
  dexNum: integer("dex_num").notNull(),
  formNum: integer("form_num").notNull(),
  have: boolean("have").notNull(),
  shiny: boolean("shiny").notNull(),
  picUrl: text("pic_url").default("none"),
})
