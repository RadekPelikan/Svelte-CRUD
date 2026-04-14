import { form, query } from '$app/server';
import { createCarSchema, updateCarSchema } from '$lib/schemas/cars';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { error } from 'console';
import { count, eq } from 'drizzle-orm';
import * as v from 'valibot';

export const getCars = query(async () => {
	const allCars = await db.select().from(table.cars).all();
	console.log(allCars.length);

	return allCars;
});

const PAGE_SIZE = 30;
export const getCarsPaged = query(v.pipe(v.number(), v.integer(), v.minValue(0)), async (page) => {
	const cars = await db
		.select()
		.from(table.cars)
		.limit(PAGE_SIZE)
		.offset(page * PAGE_SIZE);

	return cars;
});

export const getMaxPages = query(async () => {
	const [{ value }] = await db.select({ value: count() }).from(table.cars);

	return Math.ceil(value / PAGE_SIZE);
});

export const getCar = query(v.pipe(v.string(), v.uuid()), async (slug) => {
	const [car] = await db.select().from(table.cars).where(eq(table.cars.id, slug));

	if (!car) error(404, 'Car not found');
	return car;
});

export const updateCar = form(updateCarSchema, async ({ id, name, brand, power }) => {
	await db.update(table.cars).set({ name, brand, power }).where(eq(table.cars.id, id));

	redirect(300, `/car/${id}`);
});

export const createCar = form(createCarSchema, async (car) => {
	await db.insert(table.cars).values(car);
	for (let i = 0; i < 4000; ++i) {
		car.name = `car_${i}`;
		await db.insert(table.cars).values(car);
	}
});
