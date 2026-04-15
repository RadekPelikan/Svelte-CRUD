import * as v from 'valibot';

export const createCarSchema = v.object({
	name: v.string(),
	brand: v.string(),
	power: v.number(),
	image: v.pipe(
		v.file(),
		v.mimeType(['image/jpeg', 'image/png'], 'Please select a JPEG or PNG file.')
	)
});

export const updateCarSchema = v.object({
	id: v.pipe(v.string(), v.uuid()),
	name: v.string(),
	brand: v.string(),
	power: v.number()
});
