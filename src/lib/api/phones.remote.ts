import { form, query } from '$app/server';
import { createphoneSchema, updatephoneSchema } from '$lib/schemas/phones';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { error } from 'console';
import { eq } from 'drizzle-orm';
import * as v from "valibot"


export const getphones = query(async () => {

    const allphones = await db.select().from(table.phones).all();
    console.log(allphones.length)

    return allphones;
});

export const getphone = query(v.pipe(v.string(), v.uuid()), async (slug) => {
    const [phone] = await db.select().from(table.phones).where(eq(table.phones.id, slug))

    if (!phone) error(404, 'phone not found')
    return phone;
});


export const updatephone = form(updatephoneSchema, async ({ id, name, manufacturer, operatingSystem }) => {
    await db.update(table.phones).set({ name, manufacturer, operatingSystem }).where(eq(table.phones.id, id))

    redirect(300, `/phone`)
});

export const createphone = form(createphoneSchema, async (phone) => {
    await db.insert(table.phones).values(phone)
});