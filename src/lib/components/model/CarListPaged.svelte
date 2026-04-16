<script lang="ts">
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';
	import Pagination from './Pagination.svelte';
	import { PaginationService } from '$lib/Services/PaginationService.svelte';
	import { getCarService } from '$lib/Services/CarService.svelte';

	const pagination = await PaginationService.initAsync(getCarService())
	// const pagination = PaginationService.init()
</script>

<Pagination />

<ul class="grid gap-4">
	{#each pagination.items as car}
		<li class="max-w-60 rounded bg-violet-900 hover:brightness-90">
			<a href={`/car/${car.id}`}>
				<p>
					<span>{TEXTS[DEFAULT_LANG].model.cars.name}</span>
					<span>{car.name}</span>
				</p>
				<p>
					<span>{TEXTS[DEFAULT_LANG].model.cars.brand}</span>
					<span>{car.brand}</span>
				</p>
				<p>
					<span>{TEXTS[DEFAULT_LANG].model.cars.power}</span>
					<span>{car.power}</span>
				</p>
				<!-- <img src={`/assets/${car.id}.png`} alt="image"> -->
			</a>
		</li>
	{/each}
</ul>

<Pagination />
