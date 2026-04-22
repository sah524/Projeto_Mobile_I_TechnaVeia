CREATE TABLE `cidade` (
	`id` text PRIMARY KEY NOT NULL,
	`nome` text NOT NULL,
	`uf_id` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `regiao` (
	`id` text PRIMARY KEY NOT NULL,
	`nome` text NOT NULL,
	`cidade_id` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `uf` (
	`id` text PRIMARY KEY NOT NULL,
	`nome` text NOT NULL,
	`sigla` text NOT NULL
);
