import { form, query } from '$app/server';
import { log } from '$lib/logger';
import { createCarSchema, updateCarSchema } from '$lib/schemas/cars';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { error, redirect } from '@sveltejs/kit';
import { count, eq } from 'drizzle-orm';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import * as v from 'valibot';



export const getCars = query(async () => {
	const allCars = await db.select().from(table.cars).all();
	log(allCars.length + "");

	return allCars;
});

const PAGE_SIZE = 1000;
export const getCarsPaged = query(v.pipe(v.number(), v.integer(), v.minValue(0)), async (page) => {
	const cars = await db
		.select()
		.from(table.cars)
		.limit(PAGE_SIZE)
		.offset(page * PAGE_SIZE);
	log(cars.length + "");

	return cars;
});

export const getMaxPages = query(async () => {
	const [{ value }] = await db.select({ value: count() }).from(table.cars);
	log(Math.floor(value / PAGE_SIZE) + "");

	return Math.floor(value / PAGE_SIZE);
});

export const getCar = query(v.pipe(v.string(), v.uuid()), async (slug) => {
	const [car] = await db.select().from(table.cars).where(eq(table.cars.id, slug));
	log(car  + "");

	if (!car) error(404, 'Car not found');
	return car;
});

export const updateCar = form(updateCarSchema, async ({ id, name, brand, power }) => {
	await db.update(table.cars).set({ name, brand, power }).where(eq(table.cars.id, id));
	log({ name, brand, power }  + "");

	redirect(300, `/car/${id}`);
});

export const createCar = form(createCarSchema, async ({ name, brand, power, image }) => {
	const id = crypto.randomUUID();

	const ext = image.type === 'image/png' ? 'png' : 'jpg';
	const filePath = join('static', 'assets', `${id}.${ext}`);
	await writeFile(filePath, Buffer.from(await image.arrayBuffer()));

	await db.insert(table.cars).values({ id, name, brand, power });

	log(id);

	redirect(300, `/car/${id}`);
});
