CREATE TABLE "pokedex" (
	"dex_id" text PRIMARY KEY,
	"have" boolean NOT NULL,
	"shiny" boolean NOT NULL,
	"pic_url" text DEFAULT 'none'
);
