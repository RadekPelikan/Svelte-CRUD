CREATE TABLE `car` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`brand` text NOT NULL,
	`power` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `laptop` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`cpu` text NOT NULL,
	`displaySizeDiagonalInch` double NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`manufacturer` text NOT NULL,
	`operatingSystem` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `watch` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`type` text NOT NULL,
	`manufacturer` text NOT NULL
);
