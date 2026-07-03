CREATE TABLE "pokedex" (
	"id" serial PRIMARY KEY,
	"dex_num" integer NOT NULL,
	"form_num" integer NOT NULL,
	"have" boolean NOT NULL,
	"shiny" boolean NOT NULL,
	"pic_url" text DEFAULT 'none'
);
--> statement-breakpoint
DROP TABLE "planets";