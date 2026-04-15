<script lang="ts">
	import { getCarsPaged, getMaxPages } from '$lib/api/cars.remote';
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';
	import { page } from '$app/state';
	import Pagination from './Pagination.svelte';

	const currentPage = $derived(parseInt(page.url.searchParams.get('page') ?? '0'));
	const cars = $derived(await getCarsPaged(currentPage));
</script>

<Pagination/>

<ul class="grid gap-4">
	{#each cars as car}
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
				<img src={`/assets/${car.id}.png`} alt="image">
			</a>
		</li>
	{/each}
</ul>

<Pagination/>
