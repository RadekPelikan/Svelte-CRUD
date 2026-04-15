<script lang="ts">
	import { getCarsPaged, getMaxPages } from '$lib/api/cars.remote';
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';
	import { page } from '$app/state';
	import Pagination from './Pagination.svelte';

	const currentPage = $derived(parseInt(page.url.searchParams.get('page') ?? '0'));
	const cars = $derived(await getCarsPaged(currentPage));

</script>

<Pagination/>

<table class="w-full border-collapse">
	<thead>
		<tr class="bg-violet-800">
			<th class="p-2 text-left">{TEXTS[DEFAULT_LANG].model.cars.name}</th>
			<th class="p-2 text-left">{TEXTS[DEFAULT_LANG].model.cars.brand}</th>
			<th class="p-2 text-left">{TEXTS[DEFAULT_LANG].model.cars.power}</th>
		</tr>
	</thead>
	<tbody>
		{#each cars as car}
			<tr class="bg-violet-900 hover:brightness-90">
				<td class="p-2"><a href={`/car/${car.id}`}>{car.name}</a></td>
				<td class="p-2"><a href={`/car/${car.id}`}>{car.brand}</a></td>
				<td class="p-2"><a href={`/car/${car.id}`}>{car.power}</a></td>
			</tr>
		{/each}
	</tbody>
</table>

<Pagination/>