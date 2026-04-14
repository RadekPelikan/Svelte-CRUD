import * as v from "valibot"


export const createCarSchema = v.object({
    name: v.string(),
    brand: v.string(),
    power: v.number(),
})


export const updateCarSchema = v.object({
    id: v.pipe(v.string(), v.uuid()),
    name: v.string(),
    brand: v.string(),
    power: v.number(),
})
