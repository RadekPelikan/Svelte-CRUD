<script lang="ts">
	import { getCar } from '$lib/api/cars.remote';
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts.js';

	let { params } = $props();

	const car = $derived(await getCar(params.id));

	$inspect(car);
</script>

<main>
	<h1>Car detail</h1>
	<a href={`/car/${params.id}/update`}>Update here</a>
	<div>
		{#each Object.keys(car) as key}
			<p>
				<span>
					{TEXTS[DEFAULT_LANG].model.cars[key as keyof typeof car]}
				</span>
				<span>
					{car[key as keyof typeof car]}
				</span>
			</p>
		{/each}
	</div>
</main>
