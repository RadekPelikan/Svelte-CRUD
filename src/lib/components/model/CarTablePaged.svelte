<script lang="ts">
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';
	import Pagination from './Pagination.svelte';
	import { PaginationService } from '$lib/Services/PaginationService.svelte';
	import { getCarService } from '$lib/Services/CarService.svelte';

	const pagination = await PaginationService.initAsync(getCarService())
	// const pagination = PaginationService.init()
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
		{#each pagination.items as car}
			<tr class="bg-violet-900 hover:brightness-90">
				<td class="p-2"><a href={`/car/${car.id}`}>{car.name}</a></td>
				<td class="p-2"><a href={`/car/${car.id}`}>{car.brand}</a></td>
				<td class="p-2"><a href={`/car/${car.id}`}>{car.power}</a></td>
			</tr>
		{/each}
	</tbody>
</table>

<Pagination/>