import { getCar, createCar, updateCar, getCars } from '$lib/api/cars.remote';
import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';
import type { Car } from '$lib/server/db/schema';
import type { UpsertFormProps } from '$lib/types/Props';
import type { IModelService } from '$lib/types/Service';
import type { UUID } from 'crypto';
import { getContext, setContext } from 'svelte';


export interface ICarService extends IModelService<Car> {}

class CarService implements ICarService {


	constructor() {
		// Initialize CarService if needed
	}

	async Get(id: UUID): Promise<Car> {
		const car = await getCar(id);

		return car;
	}
	
	async GetAll(): Promise<Car[]> {
		const car = await getCars();

		return car;
	}

	GetCreateForm(): UpsertFormProps {
		return {
			remoteCb: createCar,
			fields: [
				{
					text: TEXTS[DEFAULT_LANG].model.cars.name,
					inputAttributes: createCar.fields.name.as('text')
				},
				{
					text: TEXTS[DEFAULT_LANG].model.cars.brand,
					inputAttributes: createCar.fields.brand.as('text')
				},
				{
					text: TEXTS[DEFAULT_LANG].model.cars.power,
					inputAttributes: createCar.fields.power.as('number')
				}
			],
			submitText: TEXTS[DEFAULT_LANG].form.submitCreate
		};
	}

	async GetUpdateForm(id: UUID): Promise<UpsertFormProps> {
		const car = await getCar(id);

		return {
			remoteCb: updateCar,
			fields: [
				{
					text: TEXTS[DEFAULT_LANG].model.cars.name,
					inputAttributes: updateCar.fields.name.as('text'),
					value: car.name
				},
				{
					text: TEXTS[DEFAULT_LANG].model.cars.brand,
					inputAttributes: updateCar.fields.brand.as('text'),
					value: car.brand
				},
				{
					text: TEXTS[DEFAULT_LANG].model.cars.power,
					inputAttributes: updateCar.fields.power.as('number'),
					value: car.power
				}
			],
			submitText: TEXTS[DEFAULT_LANG].form.submitUpdate
		};
	}
}


const DEFAULT_KEY = '$_CarService_state';

export const getCarService = (key = DEFAULT_KEY) => {
	return getContext<ICarService>(key);
};

export const setCarService = (key = DEFAULT_KEY) => {
	const carService = new CarService();
	return setContext<ICarService>(key, carService);
};
