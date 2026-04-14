<script lang="ts">
	import { getCars } from '$lib/api/cars.remote';
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';

	let cars = $derived(await getCars());
</script>

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
			</a>
		</li>
	{/each}
</ul>
