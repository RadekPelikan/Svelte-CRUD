import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { double } from 'drizzle-orm/mysql-core';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const cars = sqliteTable('cars', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	brand: text('brand').notNull(),
	power: integer('power').notNull(),
});

export const phones = sqliteTable('phones', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	manufacturer: text('manufacturer').notNull(),
	operatingSystem: text('operatingSystem').notNull(),
});

export const laptops = sqliteTable('laptops', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	cpu: text('cpu').notNull(),
	displaySizeDiagonalInch: double('displaySizeDiagonalInch').notNull(),
});

export const watches = sqliteTable('watches', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	type: text('type').notNull(),
	manufacturer: text('manufacturer').notNull(),
});

// Cars
export type Car = InferSelectModel<typeof cars>;
export type NewCar = InferInsertModel<typeof cars>;

// Phones
export type Phone = InferSelectModel<typeof phones>;
export type NewPhone = InferInsertModel<typeof phones>;

// Laptops
export type Laptop = InferSelectModel<typeof laptops>;
export type NewLaptop = InferInsertModel<typeof laptops>;

// Watches
export type Watch = InferSelectModel<typeof watches>;
export type NewWatch = InferInsertModel<typeof watches>;
